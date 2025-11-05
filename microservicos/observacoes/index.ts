// microservicos/observacoes/index.ts
import express, { Request, Response } from 'express'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { Observacao } from '../types/types'
import { Evento } from '../types/types'

// Estrutura em memória
const observacoesPorLembrete: Record<string, Observacao[]> = {}

const app = express()
app.use(express.json())

// POST /lembretes/:id/observacoes
app.post('/lembretes/:id/observacoes', async (req: Request, res: Response) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const { id: lembreteId } = req.params

  const observacao: Observacao = { id: idObs, texto, lembreteId }

  const observacoesDoLembrete = observacoesPorLembrete[lembreteId] || []
  observacoesDoLembrete.push(observacao)
  observacoesPorLembrete[lembreteId] = observacoesDoLembrete

  // Envia evento
  try {
    await axios.post('http://localhost:10000/eventos', {
      type: 'ObservacaoCriada',
      payload: observacao
    })
  } catch (error) {
    console.error('Erro ao enviar evento:', (error as Error).message)
  }

  res.status(201).json(observacoesDoLembrete)
})

// GET /lembretes/:id/observacoes
app.get('/lembretes/:id/observacoes', (req: Request, res: Response) => {
  const { id } = req.params
  res.status(200).json(observacoesPorLembrete[id] || [])
})

// POST /eventos
app.post('/eventos', (req: Request, res: Response) => {
  const evento: Evento = req.body
  console.log('Evento recebido:', evento)
  res.end()
})

// Inicialização
const port = 5000
app.listen(port, () => {
  console.log(`Observações. Porta ${port}.`)
})

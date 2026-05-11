// /microsservicos/classificacao/index.js
import express from 'express'
import axios from 'axios'
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai'
const app = express()
app.use(express.json())
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

async function main(texto) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Esse texto parece importante? ${texto}`
    })
    console.log(response.text);
    const resposta = response.text.toLowerCase()
    if (resposta.includes('importante')) 
      return 'importante'
    return 'comum'
  } catch (e) { 
    console.log(e.message)
    return texto.includes('importante') ? 'importante' : 'comum' 
  }
}

const funcoes = {
  ObservacaoCriada: async (observacao) => {
    observacao.status = await main(observacao.texto)
    await axios.post('http://localhost:10000/eventos', {
      type: 'ObservacaoClassificada',
      payload: observacao
    })
  },
  LembreteCriado: async (lembrete) => {
    lembrete.status = await main(lembrete.texto)
    await axios.post('http://localhost:10000/eventos', {
      type: 'LembreteClassificado',
      payload: lembrete
    })
  }
}

app.post('/eventos', async (req, res) => {
  try {
    const evento = req.body
    console.log('Evento recebido:', evento)
    if (funcoes[evento.type]) {
      await funcoes[evento.type](evento.payload)
    }
  } catch (e) {}
  res.end()
})

const port = 7000
app.listen(port, async () => {
  console.log(`Classificação rodando na porta: ${port}`)
  try {
    await axios.post('http://localhost:10000/registrar', {
      microsservico: 'classificacao',
      eventosDeInteresse: ['LembreteCriado', 'ObservacaoCriada']
    })
    console.log('Classificação registrada no barramento')
  } catch (e) {}
})
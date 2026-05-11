// /microsservicos/lembretes/index.js
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

let id = 0
const lembretes = {}
const funcoes = {
  LembreteClassificado: (lembrete) => {
    lembretes[lembrete.id] = lembrete
    axios.post('http://localhost:10000/eventos', {
      type: 'LembreteAtualizado',
      payload: lembrete
    })
  }
}
app.post('/lembretes', async function(req, res){
  id++
  const texto = req.body.texto
  const lembrete = { id, texto }
  lembretes[id] = lembrete
  await axios.post('http://localhost:10000/eventos', {
    type: 'LembreteCriado',
    payload: lembrete
  })
  res.status(201).json(lembrete)
})

app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.type](evento.payload)
  }
  catch(e){
  }
  res.end()
})

const port = 4000
app.listen(4000, async () => {
  console.log('Lembretes rodando na porta 4000')
  await axios.post('http://localhost:10000/registrar', {
    microsservico: 'lembretes',
    eventosDeInteresse: ['sem interesses'] 
  })
})

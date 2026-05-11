// microsservicos/barramento/index.js
import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())

const eventos = {}
const interesses = {}

app.post('/eventos', async (req, res) => {
  const evento = req.body
  const { type } = evento
  if (!eventos[type]) {
    eventos[type] = []
  }
  eventos[type].push(evento)
  console.log(evento)
  try{
    await axios.post('http://localhost:4000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:5000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:6000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:7000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:8000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:12000/eventos', evento)
  }
  catch(e){}
  res.end()
})

app.post('/registrar', (req, res) => {
  const { microsservico, eventosDeInteresse } = req.body
  interesses[microsservico] = eventosDeInteresse
  console.log(`Microsserviço ${microsservico} registrado com interesses: ${eventosDeInteresse}`)
  res.status(201).json(microsservico)
});

app.get('/eventos/:tipo', (req, res) => {
  res.json(eventos.type)
})

app.get('/eventos', (req, res) => {
  res.json(eventos)
})

const port = 10000
app.listen(port, () => {
  console.log(`Barramento. Porta ${port}.`)
})
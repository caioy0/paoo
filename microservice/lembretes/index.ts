// microservices/lembretes
console.log("lembretes...")
import express from 'express'
const app = express()
app.use(express.json())

// GET serve para obter coisas do server
// POST serve para cadastrar itens
// PUT atualizar
// DELETE apagar

let id = 1
const lembretes = {}
//definindo um endpoint que permite que lembretes sejam cadastrados
//POST /lembretes (req, res) => {}
app.post('/lembretes', function(req, res){

})

//definindo um endpoint que permite que a coleção de lembretes seja obtida
//GET /lembretes (req, res) => {}
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

const port = 4000
app.listen(4000, () => console.log(`Lembretes. Porta ${port}.`))
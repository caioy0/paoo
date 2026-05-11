// microsservicos/estatistica/index.js
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const baseEstatistica = {
    lembretesTotais:0, lembretesComuns:0, lembretesImportantes:0, 
    obsCriadas:0, mediaObs:0 , somaObs: 0
}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseEstatistica.lembretesTotais++
        if (lembrete.status === 'importante')
            baseEstatistica.lembretesImportantes++
        else 
            baseEstatistica.lembretesComuns++
    },
    ObservacaoCriada: (observacao) => {
        baseEstatistica.obsCriadas++
        baseEstatistica.somaObs += observacao.texto.length
        if (baseEstatistica.obsCriadas > 0) {
            baseEstatistica.mediaObs =
            baseEstatistica.somaObs / baseEstatistica.obsCriadas
        } 
    }
}

app.get('/estatistica', (req, res) => {
    res.json(baseEstatistica)  
})

app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    const { type, payload } = evento
    funcoes[type](payload)
  } catch(e){}
  res.end()
})

// app.listen(8000, async () => {
  //   console.log (`Logs. Porta ${port}.`)
  //   const resp = await axios.get('http://localhost:10000/eventos')
  //   for (let evento of resp.data){
    //     try {
      //         funcoes[evento.type](evento.payload)
      //     } catch (e) {}
      //   }
      // })
      
const port = 8000
app.listen(8000, async () => {
  console.log(`Consulta rodando na porta: ${port}`)
  await axios.post('http://localhost:10000/registrar', {
    microsservico: 'estatistica',
    eventosDeInteresse: ['Lembrete', 'Observacao']
  })
})
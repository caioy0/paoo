import express, { Request, Response } from "express";

interface Lembrete {
  id: string;
  texto: string;
}

interface Observacao {
  id: string;
  texto: string;
  lembreteId: string;
}

const app = express();
app.use(express.json());

// Base consolidada (armazenamento em memória)
const baseConsolidada: Record<string, Lembrete> = {};

// Funções que tratam os eventos
const funcoes = {
  LembreteCriado: (lembrete: Lembrete) => {
    baseConsolidada[lembrete.id] = lembrete;
  },
  ObservacaoCriada: (observacao: Observacao) => {
    // Aqui você pode adicionar lógica para associar observações ao lembrete, por exemplo
    console.log("Observação criada:", observacao);
  },
};

// Rota para listar lembretes
app.get("/lembretes", (req: Request, res: Response) => {
  res.json(baseConsolidada);
});

// Rota para receber eventos
app.post("/eventos", (req: Request, res: Response) => {
    try {
        const evento = req.body;
        const { type, payload } = evento;
      
        if (funcoes[type as keyof typeof funcoes]) {
          (funcoes[type as keyof typeof funcoes] as (arg: any) => void)(payload);
        }
      
        res.status(200).send({ msg: "Evento processado" });
        
    } catch (error) {
        console.log(`Error: ${error}`)
        res.json(error)
    }
});

// Inicializa o servidor
const port = 6000;
app.listen(port, () => {
  console.log(`Consulta. Porta ${port}`);
});

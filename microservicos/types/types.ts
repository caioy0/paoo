export interface Lembrete {
  id: string;
  texto: string;
}

export interface Observacao {
  id: string;
  texto: string;
  lembreteId: string;
}

export interface Evento {
  type: string
  payload: any
}

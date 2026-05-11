import json
import logging
import requests
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

logger = logging.getLogger(__name__)

baseConsolidada = {}

def lembrete_criado(lembrete):
    baseConsolidada[lembrete["id"]] = lembrete

def observacao_criada(observacao):
    observacoes = baseConsolidada[observacao["lembreteId"]].get("observacoes", [])
    observacoes.append(observacao)
    baseConsolidada[observacao["lembreteId"]]["observacoes"] = observacoes

def observacao_atualizada(observacao):
    observacoes = baseConsolidada[observacao["lembreteId"]]["observacoes"]
    indice = next((i for i, o in enumerate(observacoes) if o["id"] == observacao["id"]), None)
    if indice is not None:
        observacoes[indice] = observacao

funcoes = {
    "LembreteCriado": lembrete_criado,
    "ObservacaoCriada": observacao_criada,
    "ObservacaoAtualizada": observacao_atualizada,
}

def get_lembretes(request):
    return JsonResponse(baseConsolidada)

@csrf_exempt 
def post_eventos(request):
    if request.method == "POST":
        try:
            evento = json.loads(request.body)
            logger.info("Evento recebido: %s", evento)
            tipo = evento.get("type")
            payload = evento.get("payload")
            if tipo in funcoes:
                funcoes[tipo](payload)
        except Exception as e:
            logger.error("Erro ao processar evento: %s", e)
        return HttpResponse(status=200)
    return HttpResponse(status=405)

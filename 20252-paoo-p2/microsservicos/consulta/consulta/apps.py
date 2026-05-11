from django.apps import AppConfig
import requests
import logging

logger = logging.getLogger(__name__)

class ConsultaConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "consulta"

    def ready(self):
        try:
            requests.post("http://localhost:10000/registrar", json={
                "microsservico": "consulta",
                "eventosDeInteresse": ["ObservacaoCriada", "LembreteCriado", "ObservacaoAtualizada"]
            })
            logger.info("Consulta registrada no barramento")
        except Exception as e:
            logger.error("Erro ao registrar no barramento: %s", e)

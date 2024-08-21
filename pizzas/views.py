from .models import Pizzas
from .serializers import serialize_pizzas
from django.http import JsonResponse


def pizzas_list(request):
    pizzas = Pizzas.objects.all()
    return JsonResponse(serialize_pizzas(pizzas), safe=False)

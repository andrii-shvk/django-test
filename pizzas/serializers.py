from .models import Pizzas
from typing import Iterable, List, Dict, Any


def serialize_pizzas(pizzas: Iterable[Pizzas]) -> List[Dict[str, Any]]:
    data = []
    for pizza in pizzas:
        data.append({
            'name': pizza.name,
            'size': pizza.size,
            'photo_url': pizza.photo_url,
        })
    return data

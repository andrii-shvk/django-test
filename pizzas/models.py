from django.db import models


class Pizzas(models.Model):
    name = models.CharField(max_length=100)
    size = models.CharField(max_length=100)
    photo_url = models.URLField()

    def __str__(self):
        return self.name



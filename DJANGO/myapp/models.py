from django.db import models

class Tutorial(models.Model):
    title = models.CharField(max_length=100, blank=False, default='')
    description = models.CharField(max_length=255,blank=False, default='')
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Meeting(models.Model):
    name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name
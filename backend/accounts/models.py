from django.db import models
from django.contrib.auth.models import User


"""
    In Account's model stores information about
    users including their address, and personal info.
"""

class Country(models.Model):
    """
        Country will be created beforehand.
        All user need to do is to choose one.
    """
    country = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self) -> str:
        return self.country


class Address(models.Model):
    """
        Address inlcudes city, region, country, zip and line.
        Line is the place where street, and house number is written.
        Line is the primary way to find the address.
    """
    line = models.CharField(max_length=255, null=True, blank=True)
    region = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    zip = models.CharField(max_length=20, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.PROTECT)

    def __str__(self) -> str:
        return f"{self.country} {self.city} {self.line}"


class UserInfo(models.Model):
    """
        UserInfo is the model that adds information to the
        provided User model in django.contrib.auth.models;
        This is independent from User when deletion is processed
        which provides storing info about user even after acount
        removal.
    """
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    date_pf_birth = models.DateField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    image = models.ImageField(upload_to="user", null=True, blank=True)
    address = models.ForeignKey(Address, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self) -> str:
        return f"{self.user} -- {self.first_name} {self.last_name}"
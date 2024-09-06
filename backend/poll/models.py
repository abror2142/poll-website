from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Poll(models.Model):
    """Poll model description.
    Poll Structure as following:
        Poll (Question?):
            Option 1
            Option 2
        ...
    """
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    question = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.question


class Option(models.Model):
    """ Option model description.
    Option Structure as following:
    Option:
        Image (optional)
        Title (required)
                +
        OptionExtraFields:
            Title: Content 1
            ...
    """
    poll = models.ForeignKey(Poll, null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="options", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.poll}, {self.title}"
    

class OptionExtraField(models.Model):
    """OptionExtraField model description.
    Option Extra fields used to give more 
    information about the Poll's Individual Option
    """
    option = models.ForeignKey(Option, null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self) -> str:
        return f"{self.option}, {self.title}"


class Voter(models.Model):
    """Voter model description.
    -> Unregistered Users can also give their vote (user=null)
    -> Only first_name and last_name is required if the voter 
    want to share Identity info
    """
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField(null=True, blank=True)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    adress = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"


class Vote(models.Model):
    """Vote model description.
    Vote can be given by anonymous voter (voter=null)
    Vote must include poll and respective option.
    """
    voter = models.ForeignKey(Voter, null=True, blank=True, on_delete=models.SET_NULL)
    poll = models.ForeignKey(Poll, null=True, on_delete=models.SET_NULL)
    option = models.ForeignKey(Option, null=True, on_delete=models.SET_NULL)

    def __str__(self) -> str:
        return f"{self.user}, {self.poll}"
    

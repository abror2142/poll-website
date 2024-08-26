from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request


@api_view(['GET'])
def home_view(request: Request)-> Response:
    return Response("This message is coming from Django Backend!")
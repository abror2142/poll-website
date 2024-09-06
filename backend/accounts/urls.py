from django.urls import path, include

from .views import GoogleLogin, google_login_callback


urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('google/login/', GoogleLogin.as_view(), name='google_login'),
    path('google/login/callback/', google_login_callback, name='google_login_callback'),
]
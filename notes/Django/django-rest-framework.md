**Sources**
https://www.youtube.com/watch?v=mIlgzn2zuFE&t=3s
## Installation

```shell
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
```

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

Pour utiliser l'API navigable, ajouter les vues de connexion et de déconnexion de REST framework dans `urls.py`

```python
urlpatterns = [
    ...
    path('api-auth/', include('rest_framework.urls'))
]
```


```python
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}
```
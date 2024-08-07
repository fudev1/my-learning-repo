
## Première application

```shell
# Créer un nouveau projet
django-admin startproject mysite

# => Exemple
backend/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

- `mysite` : répertoire qui contient le paquet Python du projet.
- `manage.py` : utilitaire CLI qui permet d'interagir avec le projet.
- `__init.py__` : fichier vide qui indique à Python que ce répertoire doit être considéré comme un paquet.
- `setting.py` : régler et configurer le projet.
- `urls.py` : déclarer les URL du projet (table des matières) du site Django.
- `asgi.py` : point d'entrée pour les serveur Web pour déployer le projet.
- `wsgi.py` : point d'entrée pour les serveur Web pour déployer le projet.

```shell
# Lancer le serveur Django
python manage.py runserver
```

```shell
# Créer une nouvelle app
python manage.py startapp myapp
```

```shell
# Mettre les app créées dans settings.INSTALLED_APPS
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'monapp1',
    'monapp2',
]
```
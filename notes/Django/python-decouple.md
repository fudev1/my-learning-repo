
**Utilisation :**
Ce package est utilisé pour utiliser les *variables d'environnement*

**Source :**
https://pypi.org/project/python-decouple/
https://simpleisbetterthancomplex.com/2015/11/26/package-of-the-week-python-decouple.html
## Comment utiliser 

```shell
pip install python-decouple
```


```python
# Etat sans le .env

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = '3izb^ryglj(bvrjb2_y1fZvcnbky#358_l6-nn#i8fkug4mmz!'
DEBUG = True
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'HELLO_DJANGO',
        'USER': 'U_HELLO',
        'PASSWORD': 'hA8(scA@!fg3*sc&xaGh&6%-l<._&xCf',
        'HOST': '127.0.0.1',
        'PORT': '',
    }
}
```


```python
# Créer un fichier .env à la racine du projet.
# On peut utiliser aussi un .ini

SECRET_KEY=3izb^ryglj(bvrjb2_y1fZvcn
DEBUG=True
DB_NAME=HELLO_DJANGO
DB_USER=U_HELLO
DB_PASSWORD=hA8(scA@!fg3*sc&xaGh&6%-l<._&xCf
DB_HOST=127.0.0.1
```

❌ **Attention :** mettre à jour `.gitignore` pour ajouter le `.env` pour ne pas transmettre les données sensibles.

```python
import os
from decouple import config

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', cast=bool)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': '',
    }
}
```




## Docker 

`.devcontainer`
```json
{
  "name": "Django Backend Development",
  "build": {
    "context": "..",
    "dockerfile": "../Dockerfile"
  },
  "settings": {
    "python.pythonPath": "/usr/local/bin/python",
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "python.linting.pylintPath": "/usr/local/bin/pylint"
  },
  "extensions": [
    "ms-python.python"
  ],
  "forwardPorts": [
    8000
  ],
  "postCreateCommand": "echo 'Container is ready!'",
  "workspaceFolder": "/app",
  "remoteUser": "root"
}

```

`Dockerfile`
```Dockerfile
# Utiliser l'image Python officielle en version 'slim'
FROM python:latest-slim

# Définir le répertoire de travail à /app dans le conteneur
WORKDIR /app

# Copier le fichier des dépendances dans le conteneur
COPY requirements.txt .

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste du code source du projet dans le conteneur
COPY . .

# Exposer le port utilisé par Django (8000 par défaut)
EXPOSE 8000

# Définir la commande par défaut pour exécuter l'application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

`requirements.txt`
```requirements.txt
Django>=3.2,<4.0
djangorestframework>=3.12,<3.13
psycopg2-binary>=2.8  # Pour PostgreSQL
```

`docker-compose.yml`
```yaml
version: '3.8'
services:
  web:
    build:
      context: ./.devcontainer
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    depends_on:
      - db
    environment:
      - DJANGO_SETTINGS_MODULE=monapp.settings  # Remplace 'monapp' par le nom de ton projet Django
      - DATABASE_URL=postgres://user:password@db:5432/nomdb  # Paramètres de connexion à la DB

  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: nomdb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

1. Je crée un conteneur de développement avec une image de base de Python
2. J'installe manuellement django et les autres dépendances
3. Une fois ok, je génère le `requirements.txt`


1. Préparer le Dockerfile de base.
   Crée un fichier `dockerfile` qui ne fait qu'installer Python et définir un répertoire de travail.
   
`Dockerfile` 
```Dockerfile
FROM python:3.9-slim

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Garder le conteneur en marche (ceci est juste pour le maintenir ouvert)
CMD ["sleep", "infinity"]
```

2. Construire l'image Docker

```bash
docker build -t monprojet-backend .
```

3. Lancer le conteneur de manière interactive

```bash
docker run -it --rm -v "$(pwd):/app" monprojet-backend
```

4. Une fois dans le conteneur, installer Django etc

```bash
pip install django djangorestframework
```

5. Init le projet Django

```bash
django-admin startproject monprojet .
```

6. Générer le fichier `requirement`

```bash
pip freeze > requirements.txt
```

7. Quitter le conteneur

```
Une fois fini, je quitte le conteneur et tous les changements dans /app seront préservés puisque le répertoire est monté sur le système local
```

8. Mettre à jour le Dockerfile

```
Après avoir généré le requirement, on peut mettre à jour le Dockerfile pour inclure l'installation des dépendances à partir de ce fichier

FROM python:3.9-slim

WORKDIR /app

# Copie le requirements.txt dans le conteneur et installe les dépendances
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

```



### Problème rencontré 

Installation de la dernière version de Python (utilisation de l'image)

```dockerfile
FROM python:3-slim
=> Attention, pour utiliser la dernière version j'essayais FROM python:latest-slim mais ça ne fonctionne pas. 
latest est un mauvais tag, il faut spécifier la version python
```


Pour tirer la dernière version slim de python : 
```bash
docker pull python:3-slim
```

Pour mettre à jour l'image (reconstruire)

```bash
docker-compose build --no-cache
```


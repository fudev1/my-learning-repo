
# Structure projet : 

```bash
/projet-racine
	/client
		/src
		/public
	/server
		/heartproject (Init Django)
		/heartapp (Logique pour la santé)
```


1. **Créer un dossier backend** : 
   Créer un dossier à la racine du projet qui contiendra toute la logique du backend
2. **Initialiser Django :**
   `django-admin startproject heartproject`
3. **Application Django** :
   Créer une application pour gérer la logique spécifique à la santé
   `python manage.py startapp heartapp`

# Configuration Docker

1. Créer un `Dockerfile` dans le dossier backend pour construire l'image Django.

```Dockerfile
# Step 1: On utilise l'image officielle Python 3 comme base. 
FROM python:3.8

# Step 2: On définit un répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Step 3: On copie le fichier et les dépendances dans le conteneur et on installe les dépendances.
COPY server/requirement.txt
RUN pip install --no-cache-dir -r requirement.txt

# Step 4 : On copie tout le code source de l'application dans le conteneur 
COPY server/ .

# Step 5 : On expose le port sur lequel Django va s'exécuter
EXPOSE 8000

# Step 6 : On définit la commande pour démarrer l'application.
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```


2. `Docker Compose` : Dans la dossier racine du projet, créer un ficher `docker-compose.yml` qui déclare à la fois le service de base de données MySQL et le service Django.

C'est un fichier YAML qui définir les services, les réseaux et les volumes pour une application Docker

```yaml
version : '3.8'
services: 
	db: 
		image: mysql:latest 
		command: --default-authentication-plugin=mysql_native_password 
		volumes: - mysql-data:/var/lib/mysql 
		environment: 
			MYSQL_ROOT_PASSWORD: password 
			MYSQL_DATABASE: heart_db 
			MYSQL_USER: user 
			MYSQL_PASSWORD: password 
	web: 
		build: 
			context: ./server 
			dockerfile: Dockerfile 
		command: python manage.py runserver 0.0.0.0:8000
		volumes: 
			- ./server:/usr/src/app 
		ports: 
			- "8000:8000" 
		depends_on: 
			- db 
volumes: 
	mysql-data:
```
   

3. Aller dans le terminal puis dans le dossier du projet puis lancer la commande : 
**`docker-compose up`** en oubliant pas d'ouvrir docker.


# Connexion à la DB
1. Settings Django : Dans les paramètres du projet (`settings.py`) il faut configurer la base de donnée pour utiliser MySQL
2. Dans l'application `heartapp`, il faut créer les modèles qui correspondent aux données de santé cardiaque. 

# API et Communication avec le Front

1. Pour l'API, utiliser Django Rest Framework pour créer une API qui permettra au front-end d'envoyer et de recevoir des données. 
2. Endpoints : Définir les endpoints nécessaires pour intéragir avec le front-end (ex: pour ajouter des données d'analyse, obtenir l'historique, ...)

```md
Un endpoint dans le contexte d'une API web = une adresse URL spécifique sur un serveur web qui sert à interagir avec des ressources.

Comme une porte d'entrée pour accèder à une fonction spécifique du serveur. 
```

**Ex: pour une app médicale :** 
`GET /api/patients` : pour obtenir la liste de tous les patients.
`POST /api/patients` : pour créer un nouveau profil patient.
`GET /api/patients/{id}` : pour obtenir les détails d'un patient
`PUT /api/patients/{id}` : pour mettre à jour les données d'un patient
`DELETE /api/patient/{id}` : pour supprimer un patient

```md
Chaque endpooint est associé à une méthode HTTP (GET, POST, PUT, DELETE) et ils définissent les actions possibles. C'est la façon dont le front va communiquer avec le backend.
```
# Liaison avec le Front-end

1. Proxy : Configurer un proxy dans l'application React pour rediriger les request API vers le backend Django
2. Axios/Fetch : Utiliser Axios ou Fetch dans l'application React pour faire des request HTTP vers le backend





# DJANGO

## Créer un projet : 

```bash
django-admin startproject mysite
```

> ça va créer un nouveau projet `mysite` dans lequel se trouvera : 

```md
mysite/ (root directory)
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

## Lancer le server 

```python
python manage.py runserver
```

## Créer une app

```python
python manage.py startapp nom_de_app
```









### Models.py

Les modèles représentent les données qu'on stockera dans la DB. 
Un modèle = une **`class`** python qui hérite de `models.Model` 

```md
exmple : avoir un modèle 'Analysis'
avec les champs du formulaire
```

Il faut donc penser aux données qu'on souhaite stocker. 
Chaque **modèle** dans Django correspond à une **`table`** dans la DB et chaque **attribut** correspond à une **`colonne`** dans cette table.

Si besoin de plusieurs models (Liste clients, data Heart) il faut plusieurs class

Model pour les données analyse du coeur
```python
from django.db import models 

class HeartAnalysis(models.Model): # Identifiant unique pour chaque analyse 
	id = models.AutoField(primary_key=True) # Informations de l'analyse 
	heart_rate = models.IntegerField() # Taux de battements par minute 
	blood_pressure_systolic = models.IntegerField() # Pression systolique 
	blood_pressure_diastolic = models.IntegerField() # Pression diastolique 
	sugar_level = models.FloatField() # Taux de sucre dans le sang 
	hemoglobin_level = models.FloatField() # Taux d'hémoglobine 
	cholesterol_level = models.FloatField(null=True, blank=True) # Taux de cholestérol 
	date_time_of_analysis = models.DateTimeField(auto_now_add=True) # Date et heure de l'analyse 
	# ... tu peux ajouter d'autres champs selon les besoins 
	
	# Méthode pour représenter l'objet en tant que string 
	def __str__(self): 
		return f"Heart Analysis #{self.id} - {self.date_time_of_analysis.strftime('%Y-%m-%d %H:%M')}"
```

Model pour les données patient
```python
class Patient(models.Model):
    # Identifiant unique pour chaque patient
    id = models.AutoField(primary_key=True)
    
    # Informations personnelles
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    # ... autres champs comme l'adresse, le téléphone, etc.
    
    # Méthode pour représenter l'objet en tant que string
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

```

Pour lier les analyses à un patient, ajouter une clé étrangère `ForeignKey` dans le modèle `HeartAnalysis` qui référence le modèle `Patient` et supprime les analyses si un patient est supprimé.
```python
class HeartAnalysis(models.Model):
    # ... autres champs ...
    
    # Clé étrangère vers le modèle Patient
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    
    # ... autres champs et méthodes ...

```

Une méthode pour le Soft Delete
```python
class Patient(models.Model):
    # ... autres champs ...
    is_active = models.BooleanField(default=True)

    def delete(self, *args, **kwargs):
        self.is_active = False
        self.save()

    def __str__(self):
        return f"{self.first_name} {self.last_name} {'(inactive)' if not self.is_active else ''}"

```

- `AutoField` : est utilisé pour `id` est le champ auto-incrémenté qui sert de clé primaire unique pour chaque analyse.
  
- `IntergerField`, `FloatField`, `DateTimeField` : stocke et défini le type de données utilisées.

- `DateTimeField` > `auto_now_add=True` : enregistre automatiquement la date et heure de la création chaque 'entrée. 

- La méthode `__str__` : représentation en chaine de caractère > utile pour l'affichage dans l'interface admin de Django

Après avoir défini les modèles, il faut exécuter une commande pour appliquer les changements à la base de donnée. 

```python
python manage.py makemigrations heartapp 
python manage.py migrate
```

`makemigration` prépare les changements nécessaire à la DB 
`migrate` applique les modifications vers la DB





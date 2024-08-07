
# REACT

**`client/src/components` :**
Stockage des components réutilisables : `SideBar`, `TopBar`, `Footer`

Subdiviser en dossier pour les components spécifiques à chaque page : 
`client/src/components/ui` : Pour les boutons, cards, modales, etc.
`client/src/components/heart` : Pour les components spécifique à Heart.
`client/src/component/lung` : Pour les components spécifique à Lung.


**`client/src/services` :** 
Pour la logique de communication avec le backend, comme les appels API à Django et pourrais inclure des fichiers comme :

- `authService.jsx` : Pour la gestion de l'authentification 
- `patientService.jsx` : Pour tout ce qui concerne les opérations sur les patients

**`client/src/context` :**
Si on utilise le Context API pour gérer l'état global (comme l'utilisateur connecté ou les données patients)

**`client/src/utils` :**
Pour les fonctions utilitaires comme les validations de formulaire.



# **`HEART.JSX`**

## 1. Formulaire 

Je crée d'abord le formulaire pour collecter les données nécessaires pour les autres composants.
- Un bouton **`Save`** pour envoyer les données vers la DB MySQL
- Un bouton **`Predict`** pour pouvoir prédire sans sauver les données. Appellera l'API Django pour obtenir la prédiction IA





## 2. Composants de visualisation : 

## 3. Gestion des états : 
`useState` pour gérer les états locaux de mon formulaire 
`useEffect` pour récupérer les données existantes de la DB lors que chargement de la page.
`useContext` pour partager des états entre plusieurs components. (alternative = Redux)



## `4. Intégration Backend`

Pour les appels à l'API Django, créer des fonctions de service dans un dossier `client/src/services`
Fonctions appelées lors de la soumission du formulaire pour enregistrer les données ou obtenir des prédictions.
### **`DJANGO :`**

##### **`1. Installer Django et l'API Django Rest Framework :`**
```python
pip install django djangorestframework .
```

```python
django-admin startproject nom_du_projet .
```

Ca crée un nouveau dossier avec le nom du projet et y place les fichier de configuration initiaux de Django, y compris un `manage.py`. Lorsqu'on ajoute un `.` à la fin de la commande `startproject`, cela indique à Django de créer les fichiers de projet dans le répertoire courant plutôt que dans un nouveau sous-répertoire. 

```bash
mon_projet/
│
├── client/        # ton application React
│   └── ...        # fichiers de ton application React
│
└── server/        # ton application Django
    ├── manage.py
    └── server/    # dossier contenant les réglages de ton projet Django

```

##### **`2. Créer une nouvelle application :`** 
```python
python manage.py startapp heartapp
```

```bash
mon_projet/
│
├── client/              # ton application React
│   └── ...              # fichiers de ton application React
│
└── server/              # ton application Django
    ├── manage.py
    ├── server/          # dossier contenant les réglages de ton projet Django
    └── heartapp/        # ton application Django pour la gestion des données de coeur
        └── ...          # fichiers de ton application Django
```

`server` : est le nom du projet Django
`heartapp` : est une application au sein de ce projet. Les 'applications' dans Django sont des `composants` modulaires qui peuvent êtres utilisés dans plusieurs projets Django.
##### **`3. Établir la communication entre FrondEnd & BackEnd :`** 

**`Coté BackEnd :`**

Créer une vue API qui traitera les request POST : 
```python
# mon_app/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def predict_heart_condition(request):
    # Ici, tu traiteras les données reçues et tu retourneras une réponse
    data = request.data
    # Faire quelque chose avec les données, par exemple, appeler ton modèle de prédiction
    result = call_to_your_prediction_model(data)
    return Response({'prediction': result})

```

Définir l'URL de l'API qui pointe vers la vue qu'on vient de créer : 
```python 
# mon_projet_django/urls.py
from django.urls import path
from mon_app import views

urlpatterns = [
    # ... autres URLs
    path('api/predict-heart-condition/', views.predict_heart_condition),
]
```

Gérer les CORS : Si le FrontEnd et BackEnd sont servit sur des Ports différents il faut gérer les CORS.  
Installer le package 
```bash
pip install django-cors-headers
```

puis dans le fichier `settings.py` du projet : 
```python
# mon_projet_django/settings.py
INSTALLED_APPS = [
    # ... autres applications installées
    'corsheaders',
    # ... 
]

MIDDLEWARE = [
    # ...
    'corsheaders.middleware.CorsMiddleware',
    # ...
]

# Autoriser toutes les origines pendant le développement
CORS_ALLOW_ALL_ORIGINS = True  # Attention : Ne pas utiliser en production !
```

**`Coté FrontEnd :`**

S'assurer qu'on peut send les données du FrondEnd et les recevoir dans le BackEnd Django.
**Bouton Predict :** 
```js
const handlePrediction = async (formData) => {
    try {
        const response = await fetch('http://localhost:8000/api/predict-heart-condition/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const result = await response.json();
        console.log('Résultat de la prédiction :', result);
        // Gérer le résultat ici...

    } catch (error) {
        console.error('Il y a eu un problème avec la requête fetch :', error);
    }
};
```
**NB :** remplacer `'http://localhost:8000/api/predict-heart-condition/'` par l'URL réelle de ton API




- Créer une vue API qui accepte les request POST avec les données du formulaire
- Dans cette vue, utiliser le modèle IA pour faire la prédiction avec les données reçues
- Renvoyer le résultat de la prédiction dans la réponse de l'API

- Ajouter le bouton prédiction dans le formulaire 
- Créer une fonction qui envoie les données du formulaire à l'API DJANGO lorsque ce bouton est cliqué
- Gérer la réponse de l'API pour afficher le résultat de la prédiction 

- Après avoir reçu la prédiction, pouvoir enregistrer les données du formulaire + le résultat de la prédiction dans la DB
- Créer une autre vue Django pour enregistrer les données
- Dans REACT, après avoir reçu la prédiction, envoyer une seconde request à cette api pour enregistrer les données dans la DB
## 5. Mise à jour des components :
Après la soumission du formulaire et la réception des données de prédiction, mettre à jour l'état des components pour afficher les nouvelles informations. 
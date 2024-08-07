### low Utilisateur : Enregistrement d'un Restaurant (Mis à Jour)

1. **Création de Compte** :
    
    - Un utilisateur se rend sur la page d'inscription et choisit de s'inscrire en tant qu'utilisateur professionnel.
    - Il remplit le formulaire avec les informations de son restaurant (nom, adresse, ville, etc.).
    - Après soumission du formulaire, un email de vérification est envoyé à l'utilisateur.
2. **Vérification de l'Email** :
    
    - L'utilisateur reçoit l'email de vérification et confirme son adresse email.
    - Après confirmation, l'utilisateur peut se connecter à la plateforme et utiliser son compte comme un utilisateur normal.
3. **Accès à la Plateforme** :
    
    - L'utilisateur se connecte et voit un message dans son tableau de bord indiquant que son restaurant est en attente de validation par un administrateur.
    - L'utilisateur peut naviguer sur la plateforme et acheter des items des autres restaurants comme un utilisateur normal.
4. **Validation du Compte Pro par l'Administrateur** :
    
    - Un administrateur examine les informations du restaurant.
    - Une fois validé, la création du tenant est déclenchée :
        - Une nouvelle entrée de restaurant est ajoutée dans la table principale.
        - Un schéma unique est créé dans la base de données.
        - Un domaine unique est généré et associé au tenant.
        - L'utilisateur est assigné des permissions d'admin pour gérer le restaurant.
    - L'utilisateur reçoit une notification que son restaurant a été validé et qu'il peut maintenant ajouter des items.
5. **Gestion du Restaurant** :
    
    - L'utilisateur pro peut accéder aux fonctionnalités d'administration de son restaurant.
    - Il peut ajouter des items spécifiques à son restaurant (coupons, expériences, produits).
    - Chaque type d'item est enregistré dans sa propre table tout en héritant des propriétés communes de la table `Item`.



### Relation dans le modèle Tenant

Si vous mettez la relation `owner` dans le modèle `Tenant`, vous encapsulez toutes les informations liées à un tenant spécifique, y compris son propriétaire. Cela a du sens dans un contexte multi-tenant où chaque tenant peut être administré par un propriétaire différent. Voici les avantages et inconvénients :

#### Avantages :

- **Clarté** : La relation entre le tenant et son propriétaire est clairement définie.
- **Encapsulation** : Toutes les informations concernant un tenant sont contenues dans le modèle Tenant, ce qui peut simplifier la gestion des données tenant.
- **Flexibilité** : Si vous avez besoin de gérer d'autres types de tenants à l'avenir, la relation propriétaire-tenant reste claire et centralisée.

#### Inconvénients :

- **Complexité** : Si les informations sur le restaurant sont étroitement liées à celles du tenant, cela peut ajouter un niveau de complexité supplémentaire dans la gestion des données.

### Relation dans le modèle Restaurant

Mettre la relation `owner` dans le modèle `Restaurant` a du sens si vous considérez que le restaurant est l'entité principale et le tenant est une extension de cette entité. Cela peut être plus intuitif dans un contexte où l'application est principalement centrée sur la gestion des restaurants. Voici les avantages et inconvénients :

#### Avantages :

- **Simplicité** : La gestion des données du restaurant et du tenant est centralisée dans une seule entité.
- **Cohérence** : Les données du restaurant et du tenant sont traitées ensemble, ce qui peut simplifier certaines opérations CRUD.

#### Inconvénients :

- **Risque de confusion** : Dans un environnement multi-tenant, cela peut prêter à confusion si les tenants ne sont pas tous des restaurants.
- **Scalabilité limitée** : Si à l'avenir vous ajoutez d'autres types de tenants, la relation propriétaire-restaurant pourrait devenir restrictive.

### Recommandation

En fonction des informations actuelles et des objectifs du projet, voici ma recommandation :

#### 1. Si le projet est principalement centré sur la gestion des restaurants et que vous ne prévoyez pas d'ajouter d'autres types de tenants :

- **Mettre la relation `owner` dans le modèle `Restaurant`** est une bonne option. Cela simplifie la gestion des données et assure une cohérence.

#### 2. Si le projet pourrait évoluer pour inclure d'autres types de tenants :

- **Mettre la relation `owner` dans le modèle `Tenant`** est plus flexible et future-proof. Cela garantit que votre architecture reste modulaire et extensible.

En conclusion, en fonction de vos besoins actuels et futurs, vous pouvez choisir l'option qui correspond le mieux à votre projet.

j'entend parfois que des clients ont déjà signés avec Zenchef ou autre.. pour un contrat d'un an. Du coup vous remettez une date pour rappeler la personne. Je ne connais pas le fonctionnement des contrat zenchef, j'imagine que le client quand il rompt le contrat paie des frais. Pourquoi on ne pourrait pas racheter le contrat du client et l'inclure dans l'offre ? Le but c'est de récupérer le client avec une offre avantageuse ou de même prix (le temps de son contrat) et lui dire qu'une fois fini son offre sera moindre


dans les produits, un resto gastro fait des menu (en général en 3 ou 4 services par exemple)
Généralement le menu ne change pas (pour 3 services c'est entrée, plat, dessert) et (pour 4 services c'est les deux entrée plat dessert) il n'y a que le prix qui change. 
=> au lieu de faire créer deux items. On pourrait laisser le choix au resto de créer un item "menu" 
=> le titre : menu en 3 ou 4 services
=> Soit l'item n'a pas de prix affiché
=> soit il affiche tous les prix (ex 3 service : 48€ / 4 service : 60€)


Pour le flow d'un achat produit : (on sort du cadre d'un bon)
=> chaque item peut avoir une livraison différente
=> chaque item peut avoir une date différente
=> chaque item pourrait être choisi en livraison ou en emporter
- si emporter : composant date 
- si livraison : composant adresse puis date
	- si user connecté => adresse dispo
	- si user pas connecté => créer une adresse 
au lieu de cacher un item en fonction d'une date, c'est peut être plus logique que chaque item soit indépendant et ensuite c'est à l'utilisateur d'être intelligent et de regrouper ses commandes si il le souhaite. 
ça permet ainsi de configurer un item complètement. 
Il faudrait que l'utilisateur puisse enregistrer ses adresses



> vue 1 payer bouton
=> ajouter un message supprimé ?

bouton enregistrer > montant
changer acheter par payer
enlever le message alerte dans la connexion
si erreur connexion champs < picto attention
les numéro de tel pour le format de belgique +32
gdpr > champs a coché

revoir les bouton nom

Bouton détails > vue détails

titre viande un peu plus grand +2px

sticky bouton pout panier et payer après achat


---

Prime React :

- Bonne pratique ? 
- Quid intégration tailwind => ex : menu 

Axe amélioration : travailler en sprint => méthode agile
Faire un état d'avancement 


![[Pasted image 20240502144634.png]]


RETOUR

Faire un template project qui utiliserait le template banana
- le but est qu'un nouveau dev puisse prendre en main le template banana en utilisant les bonnes conventions / archi 
- créer un mini projet qui pourrait exploiter tout le template banana
- Avoir un fichier exemple qui expliquerait le concept et l'utilisation de chaque partie
- le developpeur pourra ainsi mieux prendre en main le banana template sans se poser mille questions

Faire en sorte de mieux utiliser git 
- le problème c'est que nico n'a pas le temps 
- mieux organiser les session stagiaire > nico devrait pouvoir vérifier le travail et le valider ou donner des axes d'amélioration pour mieux suivre le projet du dev
- intégrer le package pour les bonnes conventions github

Avoir une meilleure gestion projet 
- idéalisation du projet / brainstorm
- architecture du projet > Réunion > Amélioration (c'est ce qui manqué lors du stage)
	 dans le cadre de ce stage je n'ai pas pu prendre le temps de bloquer le projet car il y a eu au cours des semaines plusieurs questions / amélioration
- UI & UX > Réunion > Amélioration > Changement au besoin
- Front > Reunion avancement > changement si besoin
- Back > Reunion avancement > changement si besoin

j'ai fait du full stack +++


#### Le but de la méthode `__str__` en Python
=> définir une représentation lisible en chaîne de caractères (string) pour une instance d'un modèle
=> utile pour afficher des objets de manière compréhensible dans l'interface d'administration Django ou dans les logs

### Concept des Modèles

Les **modèles** dans Django sont des classes Python qui représentent les tables et les champs dans une base de données. Chaque modèle correspond à une table et chaque attribut de modèle correspond à une colonne de la table. Les modèles sont utilisés pour définir la structure des données de votre application.

#### Utilisations des Modèles

1. **Définir la Structure des Données** :
    
    - Les modèles définissent quelles données sont stockées et comment elles sont structurées.
    - Par exemple, un modèle `Restaurant` peut avoir des champs comme `name`, `address`, et `created_at`.
2. **Créer et Manipuler des Données** :
    
    - Les modèles permettent de créer, lire, mettre à jour et supprimer des enregistrements dans la base de données.
    - Les méthodes comme `save()`, `delete()`, et les gestionnaires de requêtes (`objects.filter()`, `objects.all()`, etc.) facilitent la manipulation des données.

### Concept des Sérializers

Les **sérializers** dans Django REST Framework sont des classes qui traduisent les instances de modèles (données de la base de données) en formats JSON ou XML, et vice versa. Ils permettent de convertir des objets Python complexes en types de données simples pour les rendre utilisables dans des API web.

#### Utilisations des Sérializers

1. **Convertir des Données** :
    
    - Sérialiser : Transformer des instances de modèles en formats JSON ou XML pour les envoyer dans des réponses HTTP.
    - Désérialiser : Transformer des données JSON ou XML en objets Python (instances de modèles) pour les traiter et les sauvegarder dans la base de données.

2. **Valider les Données** :

	- Les sérializers permettent de valider les données avant qu'elles ne soient enregistrées dans la base de données.
	- Par exemple, vérifier qu'un email est valide avant de créer un utilisateur.

### Exemple Vulgarisé

Imaginez une application qui gère des recettes de cuisine. Vous avez un modèle `Recipe` pour représenter une recette :

```python
from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.TextField()
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

```

Ce modèle définit une table `Recipe` avec des colonnes pour le nom, les ingrédients, les instructions, et la date de création.

Pour envoyer ou recevoir des recettes via une API, vous utilisez un sérializer :

```python
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['name', 'ingredients', 'instructions', 'created_at']

```

Le `RecipeSerializer` transforme une instance de `Recipe` en JSON pour l'envoyer via une API et transforme les données JSON reçues en une instance de `Recipe` pour les sauvegarder dans la base de données.

### Sérializer sans Modèle

Oui, vous pouvez créer des sérializers qui ne sont pas liés à un modèle, juste pour transformer et valider des données :

```python
from rest_framework import serializers

class SimpleDataSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=255)
    timestamp = serializers.DateTimeField()

```

Ce sérializer pourrait être utilisé pour valider et transformer des données entrantes sans les sauvegarder dans une base de données.



### AbstractBaseUser

`AbstractBaseUser` est une classe de base fournie par Django pour créer des modèles d'utilisateur personnalisés. Elle ne comprend pas les champs standard comme `username` ou `email`, mais elle **fournit les fonctionnalités de base** nécessaires **pour les utilisateurs, telles que le stockage du mot de passe et la gestion de l'authentification.**

### PermissionsMixin

`PermissionsMixin` **ajoute des champs et des méthodes pour gérer les permissions et les groupes**. Cela permet de définir des permissions personnalisées et de gérer les groupes d'utilisateurs de manière flexible.

### UserProfile

`UserProfile` dans `django-tenant-users` est une extension qui **combine les fonctionnalités** d'`AbstractBaseUser` et de `PermissionsMixin` pour créer un modèle d'utilisateur adapté à une configuration multi-tenant.



```python
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import TenantUser, Restaurant
from .serializers import TenantUserSerializer, RestaurantSerializer
from tenant_users.tenants.utils import create_tenant
from django.contrib.auth.models import Group, Permission

class TenantUserViewSet(viewsets.ModelViewSet):

	
    queryset = TenantUser.objects.all()
    serializer_class = TenantUserSerializer

	# Récupère les données de la requête et les valide avec un sérializer.
	# Crée l'user avec les données validées.
	# Si user = Pro alors crée un restaurant et assigne les permissions
	# self = représente l'instance actuelle de la classe (la vue)
	# request = contient les infos de la requete http
	# *args & **kwargs = passe des arguments et des mots clés supplémentaire à la méthode.
	# sont utilisé pour une flexibilité en plus.
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        if user.is_pro:
            restaurant_name = request.data.get('restaurant_name')
            schema_name = f"{restaurant_name.lower()}_{user.id}"
            restaurant = Restaurant.objects.create(name=restaurant_name, schema_name=schema_name)
            user.restaurant = restaurant
            user.save()
            create_tenant(user, restaurant)

            # Attribuer les permissions au groupe "Restaurant Admins"
            restaurant_admin_group = Group.objects.get(name='Restaurant Admins')
            user.groups.add(restaurant_admin_group)

            # Attribuer des permissions spécifiques à l'utilisateur
            user.is_staff = True
            user.is_superuser = True  # si nécessaire
            user.save()
            
            # Ajouter des permissions spécifiques
            permissions = ['add_restaurant', 'change_restaurant', 'delete_restaurant']
            for perm in permissions:
                permission = Permission.objects.get(codename=perm)
                user.user_permissions.add(permission)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

```

### Technologie Utilisée

- **Frontend** : React (vitejs) avec TypeScript
- **Backend** : Python Django 5.0.6
- **API** : Django Rest Framework avec Model View Set
- **Paiements** : Stripe
- **Gestion des Tenants** : django-tenants et django-tenant-users
- **Base de Données** : PostgreSQL

### Concept Global

- **Utilisateurs** :
    - **Particulier** : Peut créer un compte et voir la liste des restaurants.
    - **Professionnel (Pro)** : Peut créer un compte Pro, créer et gérer un restaurant, et également voir la liste des restaurants.

### Fonctionnalités et Flux Utilisateurs

1. **Création de Compte** :
    
    - Un utilisateur peut créer un compte soit comme particulier soit comme professionnel.
    - S'il choisit un compte Pro, il peut créer et gérer un restaurant.
2. **Gestion des Restaurants** :
    
    - Lorsqu'un utilisateur Pro crée un restaurant, cela crée un nouveau tenant dans la base de données.
    - Cela génère un schéma spécifique, un domaine et des permissions administratives pour l'utilisateur créateur.
3. **Ajout d'Items par les Restaurateurs** :
    
    - Les utilisateurs ayant des permissions administratives peuvent ajouter des items à leur restaurant.
    - Les types d'items incluent des Coupons, des Expériences et des Produits, tous héritant des attributs communs des Items avec des attributs spécifiques supplémentaires.
4. **Achat de Bons Cadeaux** :
    
    - Les utilisateurs peuvent acheter des coupons, qu'ils soient identifiés ou non.
    - Le processus de paiement est géré par Stripe.
    - Une vérification en double opt-in est utilisée pour l'identification.
    - Après un paiement réussi, l'utilisateur reçoit un email de confirmation. En cas d'échec, il est redirigé vers la page de paiement avec une erreur.

### Héritage et Modèles

- **Items** :
    - Les différents types d'items (Coupons, Expériences, Produits) sont gérés par un système d'héritage.
    - Par exemple, un Coupon hérite des colonnes générales d'un Item et ajoute des colonnes spécifiques comme "valid days".

### Points Clés

- **Multi-tenancy** :
    - Chaque restaurant est un tenant avec son propre schéma dans la base de données, permettant une séparation claire des données et des permissions.
- **Permissions** :
    - Les utilisateurs créant des restaurants ont des permissions administratives pour gérer leur propre restaurant.
- **Processus d'Achat** :
    - Utilisation de Stripe pour les paiements avec gestion des statuts de paiement et envoi de confirmations par email.

En résumé, votre plateforme permet à des utilisateurs de créer des comptes, gérer des restaurants et des items associés, et effectuer des achats de bons cadeaux, le tout avec une gestion des tenants pour une séparation des données et des permissions.





### Simuler l'Inscription d'un Utilisateur sur la Plateforme

Imaginons le flux d'un utilisateur qui arrive sur la plateforme et s'inscrit. Nous avons deux types d'utilisateurs possibles : un utilisateur normal et un utilisateur professionnel (PRO).

1. **Utilisateur Normal** :
    
    - Remplit un formulaire d'inscription avec les champs : email, mot de passe, prénom, nom, et coche la case "Utilisateur normal".
2. **Utilisateur Professionnel (PRO)** :
    
    - Remplit un formulaire d'inscription avec les champs : email, mot de passe, prénom, nom, coche la case "Utilisateur professionnel", et renseigne le nom du restaurant.

### Formulaire d'Inscription

#### Exemple de Formulaire d'Inscription (Frontend)

Voici un exemple de formulaire d'inscription simplifié en HTML pour illustrer ce processus :

```html
<form id="signup-form">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Mot de passe:</label>
  <input type="password" id="password" name="password" required>
  
  <label for="first_name">Prénom:</label>
  <input type="text" id="first_name" name="first_name">
  
  <label for="last_name">Nom:</label>
  <input type="text" id="last_name" name="last_name">
  
  <input type="checkbox" id="is_pro" name="is_pro">
  <label for="is_pro">Utilisateur professionnel</label>
  
  <div id="pro-details" style="display: none;">
    <label for="restaurant_name">Nom du restaurant:</label>
    <input type="text" id="restaurant_name" name="restaurant_name">
  </div>
  
  <button type="submit">S'inscrire</button>
</form>

<script>
document.getElementById('is_pro').addEventListener('change', function() {
  var proDetails = document.getElementById('pro-details');
  if (this.checked) {
    proDetails.style.display = 'block';
  } else {
    proDetails.style.display = 'none';
  }
});
</script>

```

### Backend Django pour Gérer l'Inscription

#### Modèle TenantUser

Le modèle `TenantUser` contient un champ `is_pro` pour indiquer si l'utilisateur est un professionnel.

```python
from django.db import models
from tenant_users.tenants.models import UserProfile

class TenantUser(UserProfile):
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    is_pro = models.BooleanField(default=False)
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.email
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

```

#### Sérializer pour TenantUser

Le sérializer gère les données reçues du formulaire et crée un utilisateur en fonction des données.

```python
from rest_framework import serializers
from .models import TenantUser, Restaurant

class TenantUserSerializer(serializers.ModelSerializer):
    restaurant_name = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = TenantUser
        fields = ('email', 'first_name', 'last_name', 'is_pro', 'restaurant_name', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        restaurant_name = validated_data.pop('restaurant_name', None)
        user = TenantUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            is_pro=validated_data.get('is_pro', False)
        )
        if user.is_pro and restaurant_name:
            schema_name = f"{restaurant_name.lower()}_{user.id}"
            restaurant = Restaurant.objects.create(name=restaurant_name, schema_name=schema_name)
            user.restaurant = restaurant
            user.save()
            create_tenant(user, restaurant)

            # Attribuer les permissions au groupe "Restaurant Admins"
            restaurant_admin_group = Group.objects.get(name='Restaurant Admins')
            user.groups.add(restaurant_admin_group)
        
        return user

```

### Vue TenantUserViewSet

La vue utilise le sérializer pour traiter la requête d'inscription.

```python
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import TenantUser, Restaurant
from .serializers import TenantUserSerializer
from tenant_users.tenants.utils import create_tenant
from django.contrib.auth.models import Group

class TenantUserViewSet(viewsets.ModelViewSet):
    queryset = TenantUser.objects.all()
    serializer_class = TenantUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        if user.is_pro:
            restaurant_name = request.data.get('restaurant_name')
            schema_name = f"{restaurant_name.lower()}_{user.id}"
            restaurant = Restaurant.objects.create(name=restaurant_name, schema_name=schema_name)
            user.restaurant = restaurant
            user.save()
            create_tenant(user, restaurant)

            # Attribuer les permissions au groupe "Restaurant Admins"
            restaurant_admin_group = Group.objects.get(name='Restaurant Admins')
            user.groups.add(restaurant_admin_group)
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

```

### Résumé

1. **Formulaire d'Inscription** :
    
    - L'utilisateur remplit le formulaire en ligne.
    - Coche la case "Utilisateur professionnel" s'il est un PRO, et fournit le nom du restaurant.
2. **Backend** :
    
    - Les données du formulaire sont envoyées au backend via une requête HTTP.
    - Le sérializer valide les données et crée un utilisateur.
    - Si l'utilisateur est un PRO (`is_pro=True`), un restaurant est créé et associé à l'utilisateur.
    - Les permissions nécessaires sont attribuées à l'utilisateur.

Cela permet de gérer les utilisateurs normaux et les utilisateurs professionnels avec leurs permissions et associations spécifiques. Si vous avez d'autres questions ou si quelque chose reste flou, n'hésitez pas à demander !

## Initialisation
### Objectif 

L'objectif du projet est de créer une plateforme de bons cadeaux pour des restaurants en utilisant Django avec une architecture **multi-tenants**. => `django-tenants`

➡️ Chaque **restaurant** sera un **tenant** avec **ses propres données**, isolées des autres restaurants.

➡️ Les utilisateurs peuvent voir les restaurants (tenants), acheter des bons cadeaux, les ajouter au panier et effectuer des paiements via **Stripe**. 

➡️ La gestion des utilisateurs et des permissions assurée par `django-tenant-users`.


### Techno & App

➡️ React => ViteJs : stack pour le front
	🔹Banana template => primereact
	=> Utilisation des PassTrough pour faire passer des attributs au DOM
	=> Fix d'un bug d'utilisation d'un thème perso sur Banana
	🔹Tailwind
	🔸React Query

➡️ PostgreSQL : pour la db
➡️ Stripe : API pour la gestions des paiements

➡️ Docker 
	🔹.devcontainer : pour l'environnement de développement en `dévelopment`
	🔹Dockerfile : pour monter l'image python qui sera utilisée dans l'environnement
	🔹docker-compose : pour la construction des services (django & postgres)

➡️ Python 3.12
	🔹`pip` : pour la gestion des packages
➡️ Django 5.0.6 
		=> models (class) + héritage multi table de postgres
		=> créer une app
		=> créer un projet
		=> créer un user + un tenant public
		
	🔹`django-tenants` : pour la gestion des tenants
	🔹`django-tenant-users` : pour la gestion des users dans les tenants
	🔹`psycopg2` : pour la connexion vers la db postgres
	🔸`rest-framework` : pour la mise en place des API > Json


➡️ DBeaver : application UI pour la db
➡️ Git : pour le versioning 
➡️ VScode
➡️ Linux => Shell 
➡️ Looping : pour l'architecture de la db
➡️ 🔸Postman : pour les request API 


---

**Concept de `django-tenants`**

`Tenant` : Chaque tenant représente un client ou une unité isolée dans l'application. => Chaque tenant est un restaurant. 

`Schéma` : On crée un nouveau tenant => un nouveau schéma de base de donnée est créé pour isoler les données de ce tenant des autres.

`Modèle TenantUser` : Utilisé pour créer et gérer les tenants. Il doit hériter de `TenantMixin` pour bénéficier de la fonctionnalité de multi-tenancy.

--- 


**❓🤔 Pourquoi un model `Restaurant` ?**

à la base j'avais fait mon model Restaurant qui héritait de TenantMixin mais Nico m'a dit que je ne devrais changer le nom de cette class. 

D'après ce que j'ai compris : 
- il faut une class d'un autre nom.  
  Ex : `TenantUser` =>  permettra de lister les tenants dans une table. 
  `id`, `name`, `clé qui pointe vers le schema/restaurant_name`, `created_at`
- Une class Restaurant => qui sera dans le schéma du restaurant => sera une table qui contiendra les infos de ce restaurant. 
  `id`, `name`, `l'adresse`, `le téléphone`,  etc ?
  
![[Pasted image 20240522141354.png]]

Mais quand je regarde le croquis de la DB :

![[Pasted image 20240522143147.png]]

Je me dis qu'on a bien une table Restaurant qui fait partie du public. Qui contient le schema_name donc en gros. J'imagine qu'il faut une Class TenantUser pour la gestion des tenants. Une class Restaurant qui créera la table Restaurant et les infos => on pourra lister tous les resto mais pas avoir accès à leur produit / gestion. 
Il faudra rentrer dans le schema_name du resto pour avoir accès aux produits de ce resto 
Est ce que ma vision correspond mieux à ce qui est demandé comme ça ? Pour moi ça a plus de sens ainsi 

---

TenantUser et Restaurant font partie du public => Permet de lister tous les resto dans le contexte publique tout en isolant les données spécifiques à chaque resto dans leur propre schémas.

- class `TenantUser` représente chaque tenant dans la db publique. => utilisé pour gérer les tenants et créer les schéma des tenants.
- class `Restaurant` stocke les informations globales de chaque tenant (resto) dans la db publique


1. **Base de données publique (shared schema)** :
    
    - **Table `TenantUser`** : Cette table est utilisée pour gérer les tenants. Chaque enregistrement représente un tenant (dans ton cas, un restaurant). Elle contient des informations nécessaires pour gérer les schémas, comme le nom du tenant et le nom du schéma.
    - **Table `Restaurant`** : Cette table stocke des informations globales sur chaque restaurant. Elle permet de lister tous les restaurants, mais sans accéder aux données spécifiques de chaque restaurant (comme les produits).
2. **Schéma spécifique aux tenants** :
    
    - **Tables spécifiques aux restaurants** : Chaque schéma de tenant contient des tables spécifiques aux données du restaurant, comme les produits, les commandes, etc. Ces tables sont isolées et ne sont accessibles que via le schéma du tenant correspondant.


### Db dans un projet

voir database seeding :

Database seeding is **populating a database with an initial set of data**. It is common to load seed data such as initial user accounts or dummy data upon initial setup of an application.


## How To

**Créer un Tenant**

**Créer un superuser**

### TODO

Refactor le model Tenant pour ajouter 3 class
- Tenant => la création du tenant (name, domain)
- Restaurant => hérite de tenant => autre infos
- Member => les membres du Tenant



### Fonctionnement

1. **Création d'un Tenant (Restaurant)** :
    
    - Lorsque tu crées un nouveau tenant (restaurant), une entrée est ajoutée à la table `TenantUser` dans le schéma public.
    - Une nouvelle entrée est également ajoutée à la table `Restaurant` dans le schéma public, associée à l'entrée correspondante dans `TenantUser`.
    - Un nouveau schéma de base de données est créé pour ce tenant, isolant ses données des autres tenants.
2. **Accès aux données spécifiques du tenant** :
    
    - Pour accéder aux données spécifiques d'un tenant, tu changes de schéma en fonction du nom du schéma (schema_name) stocké dans la table `TenantUser`.
    - Dans ce schéma, tu as accès aux tables spécifiques du restaurant, comme les produits, les commandes, etc.

### Exemples d'utilisation

- **Lister tous les restaurants** : Tu interroges la table `Restaurant` dans le schéma public. Cela te donne une liste de tous les restaurants avec des informations globales (nom, adresse, etc.).
- **Accéder aux produits d'un restaurant spécifique** : Tu changes de schéma en fonction du `schema_name` du restaurant. Ensuite, tu interroges les tables spécifiques dans ce schéma pour accéder aux produits, commandes, etc.

### Soft delete

En pratique, la "soft delete" est souvent mise en œuvre en ajoutant un champ `is_deleted` ou `deleted_at` dans les modèles, et en adaptant les requêtes pour filtrer les enregistrements supprimés logiquement. Cela permet de marquer un enregistrement comme supprimé sans le supprimer réellement de la base de données.

##### Scénarios d'Utilisation

1. **Applications Critiques** :
    
    - Dans des applications critiques où la suppression accidentelle de données peut avoir des conséquences importantes, la "soft delete" est fortement recommandée.
2. **Analyse de Données** :
    
    - Pour des besoins d'analyse où l'historique des données est important, conserver les enregistrements supprimés logiquement peut fournir des insights précieux.
3. **Systèmes Multi-Tenant** :
    
    - Dans des systèmes multi-tenant, où chaque tenant représente une entité distincte et isolée, la "soft delete" assure que les données ne sont pas irrémédiablement perdues, ce qui peut être crucial pour la gestion et la maintenance à long terme.


![[Pasted image 20240523123855.png]]

Attention : L'utilisation des commandes manage.py crée une liste [' '] dans la db ! 

![[Pasted image 20240523124309.png]]






#### ➡️ TODO

**🔸Configurer Django pour le multi-tenancy avec `django-tenants` :**
   - Créer les modèles `Restaurant` et `Domain`
   - Configurer les paramètres de la base de donnée et les applications partagées et spécifiques aux tenants. 
   - `SHARED_APPS`, `TENANT_APPS`, `TENANT_MODEL`, `TENANT_DOMAIN_MODEL` dans `settings.py`

**🔸Configurer `django-tenant-users` pour la gestion des utilisateurs :**
- Installer et configurer django-tenant-users
- Ajouter les applications nécessaires (`tenant_users.permissions` et `tenant_users.tenants`) dans 
- Définir `AUTH_USER_MODEL` et les `AUTHENTIFICATION_BACKENDS`

🔸**Exécuter les migrations**
- Créer et appliquer les migrations pour les modèles.

🔸**Vérifier le fonctionnement**
- S'assurer que les tenants sont créés avec leur propres schéma
- Vérifier que les utilisateurs peuvent être gérés correctement dans un environnement multi-tenant
- Tester les fonctionnalités de base (ajout au panier, paiement via stripe)
- 





## Mise en place 

checker yupjs > intégrer une interface pour le form

### Django 

##### ModelAdmin

`list_display` 
- liste des champs du modèle qui sont affichés sous forme de colonnes dans la vue liste de l'admin Django
- les champs du modèle doivent être des attributs du modèle ou des méthodes/callables définis sur le modèle ou l'admin 

`search_fields`
- liste des champs du modèle qui sont utilisés pour le champs de recherche dans l'admin Django
- permet de rechercher des entrées dans l'admin en fonction de ces champs.

##### Schema_name

- Slugifier le nom du restaurant, le transformer en CamelCase et ajouter un identifiant unique du propriétaire. `email`

```md
exemple de génération : 

Nom du restaurant : "La Rustica"
Propriétaire : "john.doe@larustica.be"
Slug : "LaRustica"
Id du propriétaire : "john.doe"
Format Final : "LaRustica_john.doe"
```

##### TenantUser

- Le **propriétaire** du restaurant **sera le superadmin** du Restaurant.
- Il pourra **ajouter** des **membres** à son staff et **gérer les permissions**, les produits, **supprimer son Restaurant**, etc
- Ses **membres** pourront uniquement **éditer** les produits par exemple.

##### Models & Admin

**Tenant**
- Gérer les informations de base du tenant
- Générer automatiquement le `schema_name`
**Restaurant**
- Hérite de `Tenant` et ajouter les champs spécifique au restaurant
**Domain**
- Associer un domaine unique à chaque tenant
**TenantUser**
- Associer le propriétaire au Tenant lors de sa création

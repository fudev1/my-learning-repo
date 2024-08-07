
#### 1. **Création de la Demande Initiale**

- Lorsque l'utilisateur soumet une demande de restaurant, nous créons une entrée temporaire dans une table dédiée aux demandes (`RestaurantRequest` par exemple). Cette table contiendra des informations comme le nom du restaurant, la ville, et d'autres détails, mais ne créera pas encore d'entrée dans `Restaurant` ou `Tenant`.
- La table `RestaurantRequest` pourrait avoir les champs suivants :
    - `id`
    - `name`
    - `city`
    - `postal_code`
    - `country`
    - `phone`
    - `owner` (ForeignKey vers l'utilisateur qui fait la demande)
    - `is_validated` (initialisé à `False`)

#### 2. **Validation par l'Administrateur**

- L'administrateur consulte les demandes dans la table `RestaurantRequest` et décide de les approuver ou non.
- Si une demande est approuvée (`is_validated` passe à `True`), nous déclenchons alors la fonction `provision_tenant`.

#### 3. **Provisionnement du Tenant**

- La fonction `provision_tenant` prend les informations de `RestaurantRequest` et crée une nouvelle entrée dans `Tenant`.
- Les informations spécifiques au restaurant (comme `city`, `postal_code`, etc.) sont ensuite ajoutées dans la table `Restaurant`.
- Voici comment cela pourrait se passer en termes de logique :
    - Créez l'entrée dans `Tenant` avec les informations de base (nom, propriétaire, etc.).
    - Créez le schéma associé.
    - Ajoutez les permissions pour l'utilisateur propriétaire dans le nouveau schéma.
    - Créez l'entrée dans `Restaurant` avec les informations spécifiques au restaurant et liez-la à l'entrée créée dans `Tenant`.

### Structuration des Modèles et Processus

#### **Modèle de Demande de Restaurant**

```python
class RestaurantRequest(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    owner = models.ForeignKey(TenantUser, on_delete=models.CASCADE)
    is_validated = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

```

#### **Processus de Provisionnement**

1. **Demande de Restaurant** :
    
    - Utilisateur soumet une demande.
    - Une entrée est créée dans `RestaurantRequest`.
2. **Validation par l'Administrateur** :
    
    - L'administrateur valide la demande (`is_validated` à `True`).
    - L'entrée dans `RestaurantRequest` est utilisée pour créer un tenant et un restaurant.
3. **Création de Tenant et Restaurant** :
    
    - Utilisation de `provision_tenant` pour créer le tenant et le schéma.
    - Création de l'entrée dans `Restaurant` avec les informations spécifiques et le lien vers `Tenant`.

### Avantages de cette Approche

1. **Séparation Claire des Étapes** :
    - La demande initiale est séparée de la création réelle du tenant, évitant ainsi les problèmes de duplication.
2. **Contrôle Administratif** :
    - L'administrateur a un contrôle total sur les demandes, assurant une validation correcte avant la création du tenant.
3. **Gestion des Données Simplifiée** :
    - Les informations sont clairement séparées entre `Tenant` et `Restaurant`, réduisant le risque d'erreurs lors de la création du tenant.

En suivant cette approche, nous pouvons assurer une gestion plus fluide et contrôlée des demandes de création de restaurants et de la création des tenants associés. Si vous êtes d'accord avec cette logique, nous pourrons ensuite discuter de l'implémentation étape par étape.

SHELL
```python
from shared.user_app.models import TenantUser
from tenant_users.permissions.models import UserTenantPermissions
from django.contrib.auth.models import Permission, Group

# Obtenir l'utilisateur
user = TenantUser.objects.get(email='public@localhost')

# Obtenir l'objet UserTenantPermissions
user_tenant_permissions = UserTenantPermissions.objects.get(profile=user)

# Créer ou obtenir le groupe Restaurant Validators
group, created = Group.objects.get_or_create(name='Restaurant Validators')

# Ajouter des permissions spécifiques au groupe
permissions = Permission.objects.filter(codename__in=[
    'add_restaurantrequest',
    'change_restaurantrequest',
    'delete_restaurantrequest',
    'view_restaurantrequest',
])
group.permissions.set(permissions)

# Ajouter l'utilisateur au groupe via UserTenantPermissions
user_tenant_permissions.groups.add(group)

# Afficher les permissions après modification
permissions = user_tenant_permissions.groups.all()
for group in permissions:
    print(group.name)
    group_permissions = group.permissions.all()
    for perm in group_permissions:
        print('  ', perm.codename, perm.name)
```
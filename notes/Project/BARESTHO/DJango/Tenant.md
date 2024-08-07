`django_tenants` 
`django_tenant_users`


## `django_tenants`

=> Gérer des applications multi tenant avec des **schéma de base de données** PostgreSQL. 
=> Chaque locataire a son propre schéma de DB séparé. 
=> Les locataires sont identifiés via leur nom d'hôte **tenant.domain.com**

==> Ces informations sont stockées dans une table du `public schema`
==> Chaque fois qu'une demande est effectuée, le nom d'hôte est utilisé pour correspondre à un locataire dans la DB.
*==> Si correspondance :* 
  - Le chemin de  recherche est mis à jour pour utiliser le schéma de ce locataire
  - Toutes les requêtes auront lieu sur le schéma du locataire.
*==> Si pas de correspondance :* 
  - Renvoie une erreur 404

## Installation 

```python 
pip install django-tenants
```

```python 
INSTALLED_APP = [ 
	# ... autres applications ... 
	'django_tenants',		
				
]
```



## `django_tenant_users`

=> Permet aux utilisateurs d'exister dans un schéma partagé (public) tout en ayant des données spécifiques à chaque locataire dans des schémas séparés.
=> Facilite la gestion des utilisateurs à travers plusieurs tenants sans duplication.


## Installation 


```python 
pip install django-tenants-users
```


```python 
INSTALLED_APP = [ 
	# ... autres applications ... 
	'django_tenant_users', 
	'django_tenant_users.permissions',			
]
```


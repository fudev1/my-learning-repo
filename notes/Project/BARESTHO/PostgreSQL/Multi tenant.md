
![[Pasted image 20240517094420.png]]


![[Pasted image 20240517094842.png]]

Your `DATABASE_ENGINE` setting needs to be changed to

```python
DATABASES = {
    'default': {
        'ENGINE': 'django_tenants.postgresql_backend',
        # ..
    }
}
```

Add the middleware `django_tenants.middleware.main.TenantMainMiddleware` to the top of `MIDDLEWARE`, so that each request can be set to use the correct schema.

```python
MIDDLEWARE = (
    'django_tenants.middleware.main.TenantMainMiddleware',
    #...
)
```

Add `django_tenants.routers.TenantSyncRouter` to your DATABASE_ROUTERS setting, so that the correct apps can be synced depending on what's being synced (shared or tenant).

```python 
 DATABASE_ROUTERS = (
    'django_tenants.routers.TenantSyncRouter',
)
```

Add `django_tenants` to your `INSTALLED_APPS`.

Now run `migrate_schemas`. This will sync your apps to the `public` schema.
```python
python manage.py migrate_schemas --shared
```

Create your tenants just like a normal django model. Calling `save` will automatically create and sync the schema.

```python
from customers.models import Client, Domain

# create your public tenant
tenant = Client(schema_name='tenant1',
                name='My First Tenant',
                paid_until='2014-12-05',
                on_trial=True)
tenant.save()

# Add one or more domains for the tenant
domain = Domain()
domain.domain = 'tenant.my-domain.com'
domain.tenant = tenant
domain.is_primary = True
domain.save()
```

##### Erreur

---

```shell
django-server    | django.core.exceptions.ImproperlyConfigured: TENANT_APPS setting not set
```

Ajouter `TENANT_APPS` et `SHARED_APPS` dans `settings.py`**

---

![[Pasted image 20240522105525.png]]
```shell
'shared.tenant_app.Restaurant'. String model references must be of the form 'app_label.ModelName'.
```

L'erreur indique que la référence au modèle `shared.tenant_app.Restaurant` est incorrecte. La référence doit être au format `app_label.ModelName`.

![[Pasted image 20240522110136.png]]

`shared/tenant_app/apps.py`

![[Pasted image 20240522110246.png]]
![[Pasted image 20240522110644.png]]

![[Pasted image 20240522110934.png]]

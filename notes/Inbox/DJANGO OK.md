
`django-admin startproject nomDuProjet`
`django-admin startapp nomDeMonApp` > ici mettre api pour faire des api

Dans le projet > urls.py : 
```python
from django.urls import path, include

urlpatterns = [
	path('api/', include('api.urls'))
]
```

Dans l'application > urls.py
```python
form .views import nomDeLaVue

urlpatterns = [
	path('home', main)
]
```

![[Pasted image 20231129174217.png]]
ça permet de pouvoir créer une vue coté backend pour voir ce qui est envoyé. Pour ça pas besoin de travailler avec de l'HTML on peut juste afficher un format JSON {}

Créer une classe serializer dans un fichier `serializers.py` qui va prendre la classe dans le model > Room

![[Pasted image 20231129174536.png]]

https://www.youtube.com/watch?v=PUzgZrS_piQ&list=PLlameCF3cMEtfyO6H7WXUAqoIJO21bDNp

![[Pasted image 20231129181547.png]]


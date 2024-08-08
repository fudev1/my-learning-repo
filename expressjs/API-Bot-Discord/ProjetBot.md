Créez la base de ce qui servira pour votre Bot

- Créez un server express
- Créez une route /citations qui renverra la liste des citations
- une route /version qui renverra la version de votre API

Nous allons rajouter 2 nouvelles routes

- la route /dashboard: Qui renverra une page html
- la route /forbidden: Qui renverra une page html
- informant notre utilisateur qu'il a essayé de rentrer dans une zone non autorisé
- secretMiddleware: qui va vérifier la présence d'un query param secret. Si sa valeur est correcte, on ne fais rien. si sa valeur est incorrecte, alors le le middleware redirige vers la page/fordibben
- (Vous pouvez utilisez la function redirect de l'objet response)

Nous allons peaufiner l'api du bot.
Pour ça, nous allons rajouter une collection users
pour y stocker tous nos futurs utilisateurs.
Et toutes les routes nécessaires pour intégrer ces utilisateurs dans notre API.
=> Rajouter une route GET, GET /:id, POST et DELETE :id pour les users

Aussi, nous avons décidé de rajouter quelques pages html pour faciliter un peu notre gestion
=> nous aurons la page /users qui liste tous les éléments de notre collection
=> et la pages /users/:id qui affiche toutes les informations d'un utilisateur

Finalement, on va rajouter 2 middlewares pour notre api:

1. un logger middleware qui nous montre qui a fait des appels à l'api et quand
2. un notFound middleware qui redirigera vers une page 404 en html

<p><strong>ID:</strong> {{ user._id }}</p>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p><strong>Full Name:</strong> {{ user.firstname }} {{ user.lastname }}</p>
    <p><strong>Password:</strong> {{ user.password }}</p>
    <p><strong>Active:</strong> {{ user.active }}</p>

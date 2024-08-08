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
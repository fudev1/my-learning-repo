
Une plateforme qui est installée sur la machine locale et qui va gérer des containeurs. 
Les containeurs sont les petits blocs que l'on voit sur le dos de la baleine sur le logo.
a
![[Pasted image 20240423203329.png]]

Un containeur peut encapsuler une application de manière isolée. Ce qui signifie qu'elle sera complètement hermétique à tout ce qu'il entoure, à quelques exceptions près.

![[Pasted image 20240423203424.png]]


  ![[Pasted image 20240423203629.png]]
![[Pasted image 20240423203707.png]]


Un containeur est basé sur une image. C'est simplement l'instance d'une image docker. Pour l'exemple il faudrait récupérer 
- une image debian
- une image postgresql
- une image serveur mail

On peut les retrouver sur `docker hub`. On va demander à docker de déployer un container à l'aide d'une image bien précise. 
Mais dans la pratique il est rare qu'on utilise une image telle quelle. Par exemple une image debian on voudrait pouvoir y ajouter des framework et des bibliothèques spécifique au projet. C'est là qu'intervient `Dockerfile`

![[Pasted image 20240423204139.png]]

On peut assimiler `Dockerfile` à une recette de cuisine. On va préciser dans un fichier à partir de quel image de base on veut créer une nouvelle image

![[Pasted image 20240423204405.png]]


3 container qui feront partie de la même architecture. Comme les containeur fonctionnent de manière isolées, il va falloir trouver un moyen d'expliquer à docker à quel ensemble appartient chaque containeur et comment chacun s'intègre dans cet ensemble 

> docker-compose

![[Pasted image 20240423210649.png]]
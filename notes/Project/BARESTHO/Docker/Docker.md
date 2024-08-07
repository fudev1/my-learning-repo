https://www.nicelydev.com/docker/transformation-modification-docker
https://docs.github.com/fr/actions/using-containerized-services/creating-postgresql-service-containers
**A regarder**

## 01. Les commandes de bases 

**Basique**
```bash
docker version
# Affiche la version du client
# Affiche le bon fonctionnement de docker
# Affiche la version du serveur
```

```bash
docker info
# Affiche plus de détails sur le serveur Docker (docker engine)
# Affiche le nombre de conteneurs actuellement en fonctionnement
# Affiche le nombre d'images stockées dans Docker
# Affiche l'OS de Docker
```

```bash
docker
# Affiche l'aide de Docker qui sont en 2 catégories 
# Management Commands & Commands 
```

**Lister**
```bash
docker container ls
# Affiche la liste des conteneurs qui sont en cours d'exécution
```

```bash
docker container ls -a 
docker container ls -all
# Affiche tous les conteneurs, y compris ceux qui ont déjà été arrêtés
```

**Stopper / Supprimer**
```bash
docker container stop <NAME/ID>
# Stopper un conteneur en particulier
```

```bash
docker container rm <NAME/ID>
# Supprimer un conteneur en particulier

docker container rm <NAME/ID> <NAME/ID> etc
# Supprimer les conteneurs listés

docker container rm -f <NAME/ID>
# Eteind le conteneur et le supprime (si il est en cours d'exécution)
```

**Logs**
```bash
docker container logs <NAME/ID>
# Affiche les logs système du conteneur en particulier
```

```bash
docker container top <NAME/ID>
# Affiche les process qui sont actuellement en cours d'exécution sur le conteneur
```

```bash
docker container inspect <NAME/ID>
# Donne les informations au format json à propos du conteneur (adresse ip, interfaces, etc)
```

```bash
docker container stats <NAME/ID>
# Affiche les stats concernant l'utilisation des ressources (RAM, CPU, etc)
```

**Naviguer & Commandes**
```bash
docker container run -it --name webserver --publish 80:80 nginx bash
-it "t" # permet de simuler un vrai terminal (comme ferait SSH)
-it "i" # permet de garder la session ouverte pour recevoir l'output des commande que l'on tape
"bash"  # donne un terminal existant à l'interieur de container pour y exécuter des commandes
```

```bash
docker container exec -it <NAME/ID> bash
# Exécute la commande bash en mode intéractif à l'intérieur du container
# sur l'image 'Alpine', bash n'est pas dispo, il faut utiliser `sh`
# => Permet de lancer des commandes à l'interieur d'un conteneur 
```

**Lister les images dans le cache Docker**

```bash
docker image ls
```


## 02. Créer un serveur web Nginx 

``` bash
docker container run --publish 80:80 nginx

# Démarre un conteneur qui utilise l'image NGINX téléchargée sur DockerHub
--publish # expose le port 80 de la machine hôte et redirige tout le trafic à l'application exécutée dans le conteneur sur le port 80
```

``` bash
docker container run --publish 80:80 --detach nginx

--detach # Exécute le démarrage du container en arrière plan
# Donne la main pour pouvoir effectuer d'autres actions sans couper le conteneur
```

```bash
docker container run --publish 80:80 --detach --name "nom du container" nginx

--name # Nommer le conteneur
```


## 03. Que se passe t'il réellement lors d'un `docker container run` ?

1. Docker va d'abord chercher l'image qu'on souhaite utiliser dans son cache local. 
2. S'il ne trouve pas dans son cache, alors il va l'a télécharger sur DockerHub (par défaut)
3. Quand il l'a trouvé, il télécharge la dernière version (sauf si on lui spécifie la version de l'image)
4. Docker va attribuer une adresse IP virtuelle sur un réseau privé à l'intérieur du serveur Docker (docker engine)
5. Si on utilise option **`--publish 80:80`**, il va ouvrir le port 80 du pc puis rediriger le trafic reçu sur ce port vers le port 80 du conteneur.
6. Démarre le conteneur en utilisant la **`CMD`** spécifiée dans le fichier Dockerfile


## 04. Différence entre Machine virtuel & Docker

![[Pasted image 20240429001555.png]]

## 05. Réseau Docker 

**Bonne pratique**
![[Pasted image 20240429130528.png]]

**Fonctionnement**
- On peut créer de nouveaux réseaux virtuels (un pour chaque service)
- Attacher un conteneur à plusieurs réseaux virtuels en même temps (voir à aucun)
- Connecter directement le conteneur à la carte réseau de la machine physique et utiliser ton IP

**Récupérer les informations réseau d'un conteneur**

![[Pasted image 20240429131336.png]]

```bash
docker container port <NAME/ID>
```

- Si on crée un conteneur sans spécifier de le mappage du port, il va simplement ouvrir le port par défaut
- Si on expose le port 80 et qu'on le mappe avec celui de la machine, on aura un résultat 

![[Pasted image 20240429131622.png]]

**Savoir quel est l'adresse IP de mon conteneur**

```bash
docker container inspect "NAME/ID"
```

![[Pasted image 20240429131816.png]]
=> On se retrouve avec beaucoup  d'informations. Si on souhaite alléger ça, on peut utiliser une commande `--format` :

```bash
docker container inspect --format '{{.NetworkSettings.IPAddress}}' <NAME/ID>
# Navigue dans le fichier JSON => Section .NetworkSettings > IPAdress
```

![[Pasted image 20240429132255.png]]

**Les commandes réseaux**

```bash
docker network ls
# Affiche les réseaux Docker qui existent
# Par défaut, ils sont au nombre de 3 : Bridge, Host et None
```

![[Pasted image 20240429142553.png]]

> **Le réseau `bridge` :** Parfois appelé Docker0 correspond au réseau virtuel par défaut qui est NATé derrière l'adresse IP de l'hôte.

```bash
docker network inspect <NETWORK_NAME>
# Affiche les détails sur le réseau Docker indiqué et montre les conteneurs qui lui sont attachés
```

![[Pasted image 20240429142947.png]]
=> On peut voir qu'il y a 2 conteneurs attachés au réseau `bridge`
=> Si on fait un `docker container ls` => On verra qu'on a bien 2 conteneurs au réseau `bridge`

![[Pasted image 20240429143114.png]]

> **Le réseau `host`** : correspond au réseau qui attache les conteneurs directement à l'hôte (sans NAT) ce qui est délétère au niveau sécurité. Mais augmente les perfs.

> **Le réseau `None`** : correspond au réseau qui enlève l'interface `eth0` du conteneur et ne laisse que l'interface `localhost` existante


**Créer de nouveaux réseaux**

```bash
docker network create <NAME_NETWORK>
# Créer un nouveau réseau auquel on pourra attacher les conteneurs
# Le Driver par défaut auquel sera attaché le nouveau réseau est le Bridge
# Permet de pouvoir attacher un sous-réseau au nouveau réseau créé
```

![[Pasted image 20240429143940.png]]

> Le DNS qui permet aux conteneurs de parler entre eux avec leur nom n'est dispo que sur les réseaux que l'on créée. Et pas dispo sur les réseaux existants (bridge). Si on relie les conteneurs sur le bridge et on essaie de faire un ping en utilisant leur nom, ça ne fonctionnera pas.  

**Créer un container et l'attacher à un réseau créé**

```bash
docker container run --name <CONTAINER_NAME> --network <NETWORK_NAME> nginx
# Crée un conteneur avec l'image NGINX et attaché a un réseau spécifié
```

**Attacher un container déjà créé à un réseau créé**

```bash
docker network connect <NETWORK_NAME> <CONTAINER_NAME>
# Attache un conteneur à un nouveau réseau (mais n'enlève pas l'attachement au réseau précédent)
```

**Détacher un container d'un réseau**

```bash
docker networkd disconnect <NETWORK_NAME> <CONTAINER_NAME>
# Détache dynamiquement la carte réseau d'un conteneur
```


## 06. Image Docker

**Une image n'est pas :**

- Il n'y a pas de système d'exploitation complet, pas de noyau (kernel) et pas de drivers
- Peut être aussi petite qu'un simple ficher mais aussi assez grande lorsqu'il s'agit d'une distribution avec apt, apache et php installés.

**DockerHub**

- https://hub.docker.com
- Dépôt sur le Cloud totalement géré par Docker
- On peut y publier des images (officielles ou non) et partager son travail avec la communauté
- Existe des dépôts privés, utilisable seulement par vous mais aussi public

**Analyser le cache d'une image (historique)**

```bash
docker image history <NAME/ID>
# Montre les différentes couches de modifications qui ont été appliquées à l'image
# Toutes les images démarrent au tout début avec une couche vide appelée "scratch"
# Tous les changements qui arrivent ensuite sur le système de fichier de cette image est une autre couche
# Tous les changements n'influent pas sur la taille de l'image
```

```bash
docker image inspect <NAME/ID>
```

**Taguer ses images et les push sur DockerHub**

```bash
docker image ls
```
![[Pasted image 20240429153203.png]]

```bash
docker image tag <SOURCE_IMAGE>:<TAG> <TARGET_IMAGE>:<TAG>
# TAG correspond à un pointer vers un commit spécifique sur une image
# TAG "latest" correspond au tag par défaut (si aucun n'est spécifié)
```

```bash
docker image push <IMAGE_NAME>
# Upload les modifications des couches de l'iamge vers DockerHub par défaut (on peut changer le dépôt)
# Il peut y avoir une erreur si on essaie de push une image vers une image officielle
# Il faut alors ajouter son pseudo avant (fudev1/IMAGE)
```

```bash
docker image tag <SOURCES_IMAGES>:<TAG> <PSEUDO/TARGET_IMAGE>:<TAG>
# On peut avoir une erreur si on est pas identifié auprès de Docker > cmd login
```

```bash
docker login
# username
# password
```

```bash
docker logout
# supprime le fichier json qui contient les infos de login (si on est sur une machine guest)
```


## 07. Dockerfile

- Ficher texte qui décrit les différentes étapes de création d'un conteneur totalement personnalisé.
- Il existe des paramètres obligatoires et des paramètres optionnels

**Paramètres**
```Dockerfile
# Le FROM est un élément obligatoire à faire figurer dans le Dockerfile
# On utilise en général une distribution Linux minimaliste (comme debian ou alpine)
# Il est possible de partir d'un conteneur complètement vide en utilisant "FROM scratch"
FROM ubuntu:latest

# On peut définir de manière optionnelle une variable d'environnement
# L'avantage d'utiliser cette option, consiste au fait que peu importe la distribution
# Linux qu'on utilise, la commande reste la même pour injecter ces variables à l'intérieur du conteneur
ENV MA_VARIABLE "je suis une variable"

# Grâce au "RUN" on peut exécuter de véritables commandes Shell à l'intérieur du conteneur
# au moment où il est buildé.
# La commande ci-dessous installe le paquet nginx et le paquet curl
RUN apt-get update && apt-get install nginx curl -y

# Par défaut, aucun port TCP ou UDP n'est ouvert
# La commande "EXPOSE" permet d'ouvrir les ports indiqués sur le conteneur
# Rien à voir avec l'option --publish (qui relie le port ouvert conteneur au port machine hôte)
# Attention, cela n'empêche pas d'utiliser l'option --publish pour rediriger ces ports
# vers ceux de votre machine
EXPOSE 80 443

# Le dernier paramètre obligatoire CMD correspond à la commande à exécuter lorsque le conteneur
# démarre.
# Attention seule une commande CMD est autorisée et si on en mets plusieurs, seule la dernière
# sera utilisée
CMD ["nginx", "-g", "daemon off;"]
```

**Lancer ses propres images Docker**

```bash
# Se trouver dans le répertoire où se trouve le Dockerfile
docker build -t <IMAGE_NAME>:<TAG>
# -t : indique que l'image va être taguée
# Attention, ne pas oublier le . à la fin de la commande (permet de situer le Dockerfile que tu veux utiliser, ici il est donc dans le répertoire dans lequel je me situe)
```

## 08. Durée de vie d'un conteneur

- Les conteneur sont immuables éphémères (non changeant et temporaire)
- Si on souhaite conserver les données on parle de **persistance** (exemple : les données dans une DB)
- => On utilise alors des **volumes**. Le conteneur va chercher dans ce volume les données. 
- => On peut aussi utiliser **bind mounts**. Indique que le dossier X du conteneur correspond au dossier X de l'hôte.

**Les volumes**
- Partager des données entre plusieurs conteneurs en cours d'exécution
- Lorsque l'hôte Docker n'est pas paramétré pour avoir un répertoire donnée ou un fichier de structure 
- Lorsqu'on souhaite stocker les données du conteneur **sur un hôte distant** ou sur le **Cloud**
- Lorsqu'on souhaite **restaurer**, **sauvegarder** ou **migrer** les données depuis un hôte Docker vers un autre hôte

**Bind mounts**
- Partager des fichiers de configuration de l'hôte Docker vers les conteneurs (par ex: pour la résolution DNS, le fichier /etc/resolv.conf est automatiquement monté depuis l'hôte vers les conteneurs)
- Partager du code source ou des éléments générés entre un environnement de développement sur l'hôte Docker et un conteneur => Les changements se font d'un coté (Conteneur) et de l'autre (PC)
- Lorsque le fichier ou les dossiers structurels de l'hôte Docker ont une réelle stabilité et une consistance garanties. 

![[Pasted image 20240429170913.png]]

https://docs.docker.com/storage/


## 09. Les volumes

- Est un élément *optionnel* à faire figurer dans le Dockerfile si on veut utiliser cette fonctionnalité
- => `VOLUME /var/lib/mysql`
- => Lorsqu'un nouveau conteneur est démarré, un volume va être créé et assigné au répertoire indiqué ci-dessus dans l'hôte.
- Signifie que tous les fichiers qu'on mettra dans ce répertoire, dans le conteneur seront stockés sur l'hôte Docker 

**Lister les volumes créés**

```bash
docker volume ls
```

![[Pasted image 20240429172356.png]]

```bash
docker volume inspect <NAME/ID>
# Donner des infos sur le volume
```

![[Pasted image 20240429173010.png]]

```bash
docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql:lastest
```

**Suppression des volumes**

- Les volumes ont besoin d'être supprimés **manuellement**
- On ne peut pas supprimer les volumes directement en supprimant le conteneur.
- Normal car les données stockées dans ces volumes sont considérées comme étant sensibles et importantes


## 10. Bind Mounting

- Permet d'effectuer une association entre des fichiers ou des répertoires de la machine hôte, avec ceux d'un ou de plusieurs conteneurs.
- Les fichiers et répertoire de l'hôte en Bind Mounting, écrasent ceux qui existent à l'intérieur d'un conteneur.
- Ne peuvent être paramétrés que si on utilise la commande `docker container run` et non le `Dockerfile` comme les volumes
- => *Monter un volume* : `docker container run -v mysql-db:/var/lib/mysql`
- => *Faire un Bind mounting* : `docker container run /home/user/mysql:/var/lib/mysql`
- => Au lieu de spécifier juste un nom, on a besoin de spécifier le chemin absolu du fichier avant le < : >

```bash
docker container run -v "path directory windows":<chemin container>
```

## 11. Docker Compose

- Configurer les relation qu'il peut y avoir entre plusieurs conteneurs (services)
- Sauvegarder les paramètres de configuration pour lancer les conteneurs dans un format simple à lire
- Lancer un environnement complet en une seule ligne de commande

**YAML et CLI**

- *YAML* : On utilise un fichier YAML (langage de présentation) qui va décrire les différentes options et paramètres des conteneurs, les réseaux et les volumes (plus, les variables d'environnement, les images, etc..)
- *CLI* : Utiliser en mode ligne de commande pour lancer des commandes.

```yml
# Si aucune version n'est spécifiée, alors Docker utilise la
# version 1 par défaut (qui ne possède pas toutes les fonctionnalités)
version: '3'

# Liste des conteneurs à lancer (équivalent de la commande docker run)
services:
  #Nom du premier service
  nom_du_premier_service:
    #(option) image à utiliser pour le conteneur du premier service
    image:
    #(option) remplace la commande CMD spécifiée dans le Dockerfile
    command:
    #(option) variables d'environnement à paramétrer (equivalent option -e)
    environment:
    #(option) volumes à paramétrer (équivalent option -v)
    volumes:
    #(option) ports à exposer (équivalent option -p)
    ports:

  nom_du_deuxieme_service:
    #(option) spécifie d'utiliser le fichier Dockerfile pour builder l'image
    build: .

#(optionnel) Liste des volumes à créer (équivalent de la commande docker volume create)
volumes:

#(optionnel) Liste des réseaux à créer (équivalent de la commande docker network create)
networks:
```

```yaml
docker compose up -d
```



---

## 1. Docker Compose, Dockerfile, .devcontainer

Le dossier `/workspaces` dans le conteneur Docker n'est pas un volume mais un répertoire du système de fichiers du conteneur 

L'utilisation des volumes dans Docker servent à persister des données ou partager des données entre le système hôte et le conteneur. 

ex : j'utilise un volume pour monter un répertoire de mon système linux `/home/barestho/shop-backend` dans le conteneur Docker `/workspaces/shop-backend`

`docker-compose.yaml`
```yaml
version: '3.8'
services:
  app:
    build:
      context: ./.devcontainer
      dockerfile: Dockerfile
      
    # Crée un volume dans Docker 
    # => un point de montage entre le système de fichiers de mon hôte et le conteneur
    volumes: 
      - .:/workspaces
    ports:
      - "8000:8000"

```

 - Utiliser pour configurer et lancer plusieurs conteneurs Docker qui fonctionnent ensemble.
 - `services` : Défini les différents services qui composent mon application (ex : Django, PostgreSQL, ...)
 - `build` : Spécifie les options de construction de l'image Docker pour mon service, notamment où trouver le Dockerfile et le contexte de build 
 - `volumes` : Crée un point de montage entre mon système hôte et le conteneur. 
   => Il synchronise le répertoire courant (`.`) avec (`:workspaces`) dans le conteneur.
 - `ports` : Mappe les ports entre le conteneur et l'hôte, ce qui rend mon application accessible via `localhost`
   => Expose le port 8000 à l'intérieur du conteneur sur le port 8000 de mon système hôte.

---

Ce montage permet au conteneur d'accéder au code qui réside physiquement sur le système hôte et non dans le système de fichier conteneur. => Permet de profiter de la portabilité et de l'isolation de Docker tout en éditant tes fichiers localement avec les outils préférés. 

=> Si j'exécute `docker compose up -d` dans le répertoire où se trouve mon fichier `docker-compose.yml` => Docker va créer les conteneurs spécifiés dans ce fichier. 

Si je défini un service avec volume monté comme ceci : 
```yaml
volumes: 
	- .:/workspaces/shop-backend
```

=> Va indiquer que le répertoire actuel (`.`) sur mon système hôte (où j'exécute le `docker compose up`) sera monté dans le conteneur au chemin `workspaces/shop-backend`

=> Si je modifier des fichiers dans ce répertoire sur mon hôte, les modifications seront visibles et effectives immédiatement dans le conteneur, car il s'agit du même répertoire, mais partagé entre l'hôte et le conteneur. 

=> Inversement, si des fichiers sont créés ou modifiés dans le conteneur (dans `workspaces/shop-backend`) ces changements seront également visibles sur l'hôte. 


> Exécute le code dans un environnement Docker qui peut inclure toutes les dépendances et configurations nécessaires, isolées de mon environnement hôte. Idéal pour créer un environnement de développement cohérent et contrôlé pour tous les membres de l'équipe.

---

`Dockerfile`
```Dockerfile
FROM python:3.9-slim

# Défini le répertoire de travail dans le conteneur
WORKDIR /workspaces

# Garder le conteneur en marche
CMD ["sleep", "infinity"]
```

- Crée un script utilisé par Docker pour automatiser la création d'une image de conteneur.
- `FROM` : Spécifie l'image de base à utiliser via Docker Hub
- `WORKDIR` : Définit le répertoire de travail dans le conteneur. C'est là où mon application sera située dans le conteneur. 
  => ça correspond au dossier synchronisé avec mon volume dans `docker-compose.yml`
  => Toutes les commandes `RUN`, `CMD`, `ENTRYPOINT`, `COPY` et `ADD` seront exécutées relativement à ce répertoire. 
- `CMD ["sleep", "infinity"]` : Utilisé pour garder le conteneur en marche sans exécuter une application spécifique.
  => tips : ne concerne pas la persistance des données mais permet de ne pas arrêter le conteneur si aucune autre commande principale n'est fournie.
  
> => Dans un contexte de développement, on lancerait plutôt l'application ou un serveur

`.devcontainer.json`
```devcontainer.json
{
    "name": "Barestho Shop Backend",
    "build": {
      "dockerfile": "Dockerfile",
      "context": ".."
    },
    "forwardPorts": [
      8000
    ],
    "postCreateCommand": "echo 'Container ready!'",
    "workspaceFolder": "/workspaces"
  }
```

- Spécifique à vscode et utilisé pour spécifier comment l'éditeur doit construire et interagir avec le conteneur de développement. 
- `name` : Nom lisible pour l'environnement de développement
- `build` : Spécifique où trouver le Dockerfile pour construire l'environnement.
- `forwardPorts` : Liste les ports à rediriger automatiquement de l'hôte vers le conteneur. 
- `postCreateCommand` : Commande exécutée juste après la création du conteneur. 
- `workspaceFolder` : Chemin du répertoire de travail dans le conteneur qui sera utilisé par vscode.

## 2. `Docker Compose` vs `.devcontainer.json`

Même si ils ont des similitudes, ils ont deux objectifs différents : 
- `docker-compose.yml` : outil pour définir et exécuter des applications Docker multi conteneurs via la commande `docker compose up`
- `.devcontainer.json` : spécifique à l'extension de vscode et utilisé pour configurer un environnement de développement lors de l'ouverture d'un projet dans le conteneur.

## 3. Build d'image Docker 

```bash
docker build -t monprojet-backend .
```

- Docker lit `Dockerfile` et exécute chaque instruction pour construire une image. 
  => inclut le téléchargement de l'image de base (ex: `python`), 
  => l'exécution de commande (comme `pip install`) 
  => la configuration de l'environnement d'exécution.
  
- Option `-t` (tag) : nomme et étiquette l'image construite. 
  => Si rien n'est changé dans le `Dockerfile` et qu'on ré exécute `docker build`, Docker utilisera le cache pour chaque couche qui n'a pas changé => accélère le process de reconstruction. 

## 4. Rebuild avec Docker Compose

```bash
docker compose up --build
```

- Vérifie si l'image pour un service doit être reconstruite. 
- Si changement dans `Dockerfile` ou dans le fichier `requirements`, Docker reconstruira l'image. Sinon il utilise l'existante.
- Sans le `--build`, Docker Compose n'essaiera pas reconstruire l'image. Il utilisera l'image existante ou l'état actuel de l'image.

## 5. Nom de l'image et Réutilisation

Si je construis une image qui pourrait être réutilisée (ex: un environnement de base que tous les dev de l'équipe pourraient utiliser), on pourrait la pousser vers un repo pour commencer à développer directement.

## 6. Conclusion 

> MISE EN PRATIQUE :

**Créer des Dockerfile**
Pour le frontend React et backend (Django / PostgreSQL) il faut créer des Dockerfile qui vont définir les environnement nécessaires pour chaque partie du projet. 

- Dockerfile frontend : Contiendra Node.js, React, etc
- Dockerfile backend : Python, Django, Rest, etc

**Docker Compose**
Pour faciliter le lancement de l'ensemble des services (frontend, backend et db), créer un fichier `docker-compose.yml` dans chaque projet qui définit comment les conteneurs doivent interagir.

****



> EXECUTION : 

**Step 1 : Cloner les repo**
- Cloner le repo `frontend`
  => fichier `docker-compose.yml` spécifique au projet React qui définit l'environnement nécessaire, incluant Node.js et toutes les dépendances. 
- Cloner le repo `backend`
  => même chose, un fichier `docker-compose.yml` pour le projet Django et la DB PostgreSQL

**Step 2 : Lancer les projet via Docker Compose**
- Dans le répertoire `frontend`
  => Exécuter `docker compose up` dans le terminal => Construit (si nécessaire) et lance l'environnement React, port 3000
- Dans le répertoire `backend`
  => Même chose, `docker compose up` => Mettra en place l'environnement Django et la db, exposant généralement l'api sur un port 8000
  
**Step 3 : Accéder au applications**
- Une fois que les conteneurs sont en marche, simplement ouvrir un navigateur et accéder à l'url du projet

Ainsi, chaque équipe peut travailler indépendamment sur son propre aspect du projet (frontend ou backend), et les deux peuvent être lancés et testés ensemble très facilement par n'importe quel membre de l'équipe grâce à Docker. L'utilisateur final n'a besoin d'aucune configuration ou installation spécifique autre que Docker et Docker Compose. Il n'a qu'à cloner les repos, lancer les commandes, et tout devrait fonctionner de manière transparente.

--- 
### Phase recherche / Questionnement

Baptiste me posait la question pour le build.
- est ce que ça re build à chaque fois l'image ? Quid nom de l'image ? => apparemment on peut sur base d'une image, la composer de dépendance pour ainsi avoir une image personnalisée, faudrait il pas que cette image soit buildée et puisse être utilisée directement et pas devoir la rebuild à chaque fois ? 
  Ce concept ne m'est pas très clair. 

=> en général on reconstruit une image que si nécessaire (si on modifie Dockerfile ou les fichiers qui font partie du contexte de build)
=> dans un flux de travail, on construit l'image une fois, puis on la pousse et on l'utilise sans avoir à la reconstruire. 
=> Le fichier `docker-compose.yml` peut être configuré pour utiliser :
- soit une image localement construite (avec `build`) soit une image
- soit une image tirée d'un dépôt (avec `image:` )


=> les variables d'environnement, apparemment 2 façon de faire (.env) / ou mettre dans un fichier template
- l'idée serait de pouvoir dans le docker compose, que toutes les variables d'environnements soient prise en compte. Pour simplifier au maximum le lancement d'un projet pour voir son fonctionnement lorsque je récupère un repo à partir de github. 

=> Regarder pour la convention du Dockerfile > Lancer les commandes plus compliquée au début et les pip install etc plus simple à la fin (to check)



J'ai un soucis avec les volumes que je ne comprend pas bien 
dans mon dockerfile j'ai informé le workdir à /app 
=> je défini le répertoire de travail dans le conteneur à /app



![[Pasted image 20240331233504.png]]

## Versionner en local

```bash
git init
# Aller dans le dossier de travail > initialiser le dépot
```

```bash
git add.
# Ajoute toutes les modifications de notre dossier et on les stock dans une liste d'attente (zone d'index)

git status
# Permet de voir ce qu'on ajoute dans notre dossier mis en tampon
```

```bash
git commit -m "explication"
# Sauvegarde les modifications en tampon dans un commit
```

Créer une clé SSH
```shell
# Génerer une nouvelle clé :
ssh-keygen -t ed25519 -C "tonemail@example.com"

# Activer l'agent SSH et ajouter la clé : 
eval "$(ssh-agent -s)"

# Ajouter la clé à l'agent pour la gestion : 
ssh-add ~/.ssh/id_ed25519

# Copier le contenu de la clé
cat ~/.ssh/id_ed25519.pub
```

## Créer un nouvelles branche

```shell
git checkout -b nouvelle_branche
```

## Nouveau projet 

```
Créer un nouveau repo sur github
```

```shell
# initialiser le dépot
git init
```

```shell
# ajouter le dépôt comme remote
git remote add origin https://github.com/user/nomdurepo.git
```

=> ready pour commit
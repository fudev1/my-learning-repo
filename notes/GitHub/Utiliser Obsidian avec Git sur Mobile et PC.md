
## Intro

Obsidian est un outil de prise de notes puissant, optimisé pour la création et la gestion de notes en MarkDown. Pour tirer le meilleur parti de ses fonctionnalités, on peut synchroniser les notes avec GitHub. 

------
## Installation sur Mobile

### Prérequis :

- Installer **Obsidian** 
- Installer **Termux** (terminal de commande sous android)
- Créer un compte sur GitHub
- Créer un repository `obsidian` sur GitHub
=> Conseil : Crée ton repo, ajoute ton dossier de notes déjà dessus et push ainsi quand tu feras le clone tu auras déjà tes notes sur le tel et pas un dossier vide. 

----

### Étapes d'installation : 

**Donner les droits de gestion de fichier à Termux et installer GIT**

C'est pour que Termux puisse avoir accès à la gestion des dossiers propre au smartphone car de base Termux est sous Linux donc il aura son propre répertoire /home (un peu comme wsl)

`Ouvrir Termux :`
```bash
termux-setup-storage 
# => Dans la liste des application, choisir Termux et donner accès au fichier
```

```bash
pkg install git 
#  => Va télécharger et installer le package GIT sur le smartphone
```

**Générer et configurer la clé SSH pour lier Git au smartphone**

```shell 
ssh-keygen -t rsa -b 4096 -C email@domain.com
# => changer l'email par celle utiliser sur ton compte GIT
```

```shell
cat ~/.ssh/id_rsa.pub
# => Affiche la clé SSH. Il faudra la sélectionné puis la copier 
```

Ensuite aller sur GitHub avec le smartphone => `Settings` => `SSH and GPG keys` => `New SSH key` et coller la clé.

**Cloner le repository `obsidian`**

```shell
git clone git@github.com:username/osbidian.git
# Dans termux, utiliser la commande pour cloner le repo avec le bon username
```

**Déplacer le répertoire**

Le repository va être cloné dans le répertoire racine de Termux qui utilise son propre environnement. Pour le passer dans le répertoire Android il faudra simplement le déplacer vers l'emplacement utilisé par Android (c'est pour ça qu'il fallait lui donner accès au répertoire de Android plus haut) :

```shell
mv ~/obsidian /storage/emulated/0/obsidian
```

=> Maintenant si tu regardes dans le répertoire racide de ton android tu verras le dossier `obsidian`

### Obsidian

**Configurer Obsidian pour utiliser le repository**

Cliquer sur `Open folder as Vault` et choisir le répertoire `obsidian`

----

## Installation sur PC

**Installer et utiliser l'extension GIT**
Ouvrir le repository avec obsidian comme vault
Ajouter l'extension Git qui est de `Vinzent`

Ouvre la palette de commande : `ctrl + p` 
Si tu écris juste `Git` (non pas Guyyy, juste Git) tu auras accès à toutes les commandes. 

`Git: Pull`
`Git: Commit`
`Git: Push`
`Git: etc` 


# Cas d'usage : 

Donc en gros voilà comment tu utilises obsidian : 

1. **Écris** des notes, blablabla
2. **Commit** ta note, tu fais un `ctrl + p` => et tu écris *commit* ça va trouver les bonnes commandes `git: commit all change` ou `git: commit all change with a message`
3. **Push** : `ctrl + p ` => écrire *push* et choisir la bonne commande `git: push`

✅ Ta note est bien sauvée sur git. 

Quand t'es sur le pot et que tu veux relire ta note :

1. **Ouvre** *Termux* sur ton mobile.
2. Va fans le bon répertoire : `cd /storage/simulated/0/obsidian`
3. **Pull** `git pull` 

💡 Il va surement t'ennuyer la première fois pour ajouter une exception, copie/colle juste la réponse qu'il te donne dans le terminal 

=> En gros t'es obligé d'utiliser le terminal Termux comme si tu étais sur le pc pour utiliser Git avec toutes les commandes que tu connais (add, commit, push, pull) si tu veux ajouter des notes avec ton mobile car Android comprend pas Git de base.




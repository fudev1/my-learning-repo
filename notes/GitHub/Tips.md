

## Ignorer certains fichiers 

Pour cacher certains fichiers ou répertoires dans un repository on utilise un fichier `.gitignore` et on y indique toutes les sources que l'on veut cacher.

```md
**/__pycache__
```

=> permet de cacher tous les dossier `__pycache__` qui se trouvent à n'importe quel endroit. 

Par exemple : 

```.gitignore
/shared/tenant_app/migrations/
/shared/user_app/migrations/
/tenant/shop_app/migrations
```

```.gitignore
**/migrations/
**/__pycache__
```


## Supprimer des fichiers que j'ai déjà push

Même après avoir ajouter des dossiers à ignorer, les dossiers déjà suivi par Git doivent être explicitement supprimés du suivi.

```bash
# Supprimer les dossiers migrations et __pycache__ du suivi Git
git rm -r --cached **/migrations/
git rm -r --cached **/__pycache__/
```

```bash
# Commits les changements
git commit -m "Supprimer les dossiers migrations et __pycache__ du suivi et les ajouter au .gitignore"
```

```bash
# Push les changements vers la branche development
git push origin development
```

```bash
# Nettoyer le dépôt local
git clean -fdX
```



```bash
# Creer une nouvelle branche
git checkout -b setup/docker-environment

# Changer de branche
git checkout nomdelabranche

git add .

# commit
git commit -m "setup: configure Docker environment for Django development"

# push
git push origin setup/docker-environment

# voir toutes les branches
git branch -a

# Merge une branche locale sur une autre
## 1. aller dans la branche où l'on veut merge
git chechout nomdelabranche
git pull origin/nomdelabranche
## 2. Merge une branche sur la branche
git add .
git commit -m "merge nomdelabranche into nomdelabranche"
git merge nomdelabranche
## 3. Push les modifications
git push origin nomdelabranche

# supprimer une branche locale
git branch -d nomdelabranche

# Supprimer la branche sur le dépot distant 
git push origin --delete nomdelabranche

# Forcer la suppression sur le dépôt distant (si git fait un erreur)
git branch -D nomdelabranche


```


- **chore**: Pour les modifications qui ne modifient pas le code de l'application (configurations, setup de l'environnement...).
- **setup**: Spécifique pour les configurations initiales et setups.
- **fix**: Pour les corrections de bugs.
- **feature**: Pour les nouvelles fonctionnalités.

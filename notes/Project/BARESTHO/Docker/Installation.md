
**Sources :**
https://docs.docker.com/desktop/install/windows-install/
https://learn.microsoft.com/fr-fr/windows/wsl/install

## Installer WSL avec Ubuntu

- Ouvir powershell en administrateur
- Lancer la commande : `wsl --install`
- Télécharger le package `ubuntu`

## Installer docker

- Télécharger et installer Docker 
- Vérifier l'installation de Docker : `docker --version`
- Paramètres > Ressources > WSL integration : cocher Ubuntu
- Faire un test => HelloWorld pour voir si docker lance bien un container `docker run hello-world`
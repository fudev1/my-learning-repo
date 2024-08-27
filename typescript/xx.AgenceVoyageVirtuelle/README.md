## TODO : 🟩

- ✅ Créer un Token d'accès à l'API
- 🟩 Connecter l'API Travel Advisor à l'application
- 🟩 Connecter l'API Open-Meteo à l'application
- 🟩 Afficher les voyages via l'API Travel Advisor
- 🟩 Afficher les conditions météo en temps réel pour les destinations choisies (API Open-Meteo)
- 🟩 Réserver un voyage pour les clients
- 🟩 Afficher les voyages réservés par les clients
- 🟩 Gérer la fonctionnalité des touches de navigation

## TIPS :

1. Interfaces
- Classes qui définissent des méthodes et propriétés pour les classes d'objets.
- Utiliser pour décrire la structure de base d'un objet qui sera manipulé dans l'application.
- Défini les propriétés que chaque objet doit avoir.
- Aide à maintenir une structure cohérente.
=> Créer une classe abstraite pour les entités.
=> Implémenter les classes principales (Voyage, Client, Réservation) en utilisant ces interfaces.

2. Axios
- Installer le package Axios


## Menu en console :

- Voir la liste des voyages disponibles :

```python
"Travel Manager"                         USER: "Bonjour `John`"

"Voici les voyages disponibles :" // (afficher un tableau de 15 voyages + lier un raccourci de choix)
"(1). Voyage 1"     "(6). Voyage 1"      "(11). Voyage 1"
"(2). Voyage 2"     "(7). Voyage 2"      "(12). Voyage 2"
"(3). Voyage 3"     "(8). Voyage 3"      "(13). Voyage 3"
"(4). Voyage 4"     "(9). Voyage 4"      "(14). Voyage 4"
"(5). Voyage 5"     "(10). Voyage 5"     "(15). Voyage 5"

"(R) pour rechercher une destination - (<- pour précédent) - (-> pour suivant)"
```
---

```python
"Travel Manager"                         USER: "Bonjour `John`"

"Rechercher un voyage"

"Commencer par entrer les premières lettres de la destination: "
=> input
```
---

```python
"Travel Manager"                         USER: "Bonjour `John`"

"Info voyage: Voyage 1"

"Description : lorem ipsum dolor sit amet consectetur adipiscing elit"
"Départ : Paris"
"Arrivée : Marseille"
"Durée : 2 jours"
"Prix : 100€"

"(R) pour Réserver la destination - (ESC pour retour)"
```

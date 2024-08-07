Les relations de spécialisation-généralisation sont utilisées pour représenter les héritages dans les bases de données. Elles définissent comment les entités parent (générales) se décomposent en entités enfants (spécialisées).

## Concept clés

**Totale (T) ou Partielle (P) :**** 

- **Totale (T) :** Toutes les entités de la classe parent doivent être spécialisées dans au moins une des classes enfants.
  
- **Partielle (P) :** Les entités de la classe parent peuvent être spécialisées dans une ou plusieurs des classes enfants, ou peuvent ne pas être spécialisées du tout. 

**Exclusive (E) ou Chevauchement (O) :**

- Exclusive (E) : Chaque entité de la classe parent ne peut être spécialisée que dans une seule classes enfants simultanément.
  
- Chevauchement (O) : Chaque entité de la classe parent peut être spécialisée dans plusieurs classes enfants simultanément.

## Exemples avec Explications

#### Totale et Exclusive (T, E)

**Exemple :** 
- Classes : `Personne`, `Etudiant`, `Employe`
- Relation : Totale et Exclusive

**Explication :** 
**Totale** : Chaque `Personne` est soit un `Etudiant`, soit un `Employé`, mais pas les deux.
Il n'y a pas de `Personne` qui ne soit ni `Etudiant` ni `Employe`

```md
           Personne
           /      \
      Etudiant  Employé
```

#### Partielle et Exclusive (P, E)
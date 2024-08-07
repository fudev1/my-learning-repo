
Source : 
https://github.com/django-tenants/django-tenants



Un schéma peut être considéré comme un répertoire dans un système d'exploitation, chaque répertoire (schéma) ayant son propre ensemble de fichiers (tables et objets). Cela permet d'utiliser le même nom de table et les mêmes objets dans différents schémas sans conflit. Pour une description précise des schémas, consultez la documentation officielle de PostgreSQL sur les schémas.

https://www.postgresql.org/docs/9.1/ddl-schemas.html


Les schémas sont utilisés pour résoudre le problème de multitenancy de différentes manières :

- Approche isolée : Bases de données séparées. Chaque locataire a sa propre base de données.
- Approche semi-isolée : Base de données partagée, schémas séparés. Une base de données pour tous les locataires, mais un schéma par locataire.
- Approche partagée : Base de données partagée, schéma partagé. Tous les locataires partagent la même base de données et le même schéma. Il y a une table principale des locataires où toutes les autres tables ont une clé étrangère pointant vers elle.



```yml
version: '3.8'

services:
  db:
    image: postgres:latest
    container_name: postgres
    environment:
      POSTGRES_DB: barestho_shop
      POSTGRES_USER: your_username
      POSTGRES_PASSWORD: your_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: your_email
      PGADMIN_DEFAULT_PASSWORD: your_password
    ports:
      - "5050:80"
    depends_on:
      - db

volumes:
  postgres_data:
```

**Remarque** : En voyant ça je me dis que j'ai mal vu mon projet container de développement. 
=> Le problème est que actuellement j'ai un service donc un container (backend) et un service (db). 
=> Le container backend se base sur une image python où j'ai installé python etc. Et communique avec le container DB
=> Je me demande si il aurait pas fallut faire un service django, qui utilise une image python. Un service environnement, pour le développeur, qui utilise une image linux et un service db ? Ainsi, si une erreur sur le service django, ça n'impacte pas le service environnement. 
**Checker ce case avec Nico** 



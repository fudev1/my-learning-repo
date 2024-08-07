**Hexagonal Architecture**

**But :**
Vise à créer une architecture où l'application est isolée de ses dépendances externes (comme les base de données, les API externes, les interfaces utilisateurs.) Cela permet de rendre l'application plus flexible, maintenable et testable.

*On construit une maison avec différentes portes et fenêtres. Ces portes et fenêtres (`les ports`) permettent d'interagir avec l'extérieur, mais la structure interne de la maison (le cœur de l'application) reste inchangée, quel que soit le type de porte ou de fenêtre utilisé. Les adaptateurs sont les éléments qui s'ajustent pour que différentes portes et fenêtres puissent se fixer aux mêmes ouvertures.*

**Ports :** Les interfaces définies par l'application pour communiquer avec le monde extérieur. 
**Adapters :** Les implémentations concrètes de ces interfaces, adaptant les interfaces externes (comme les db, les services web) aux ports de l'application.

### Avantages 

**Isolation :** L'application est isolée de ses dépendances externes, facilitant les changements
**Testabilité :**  On peut tester l'application indépendamment des services externes en utilisant des mocks ou des stubs.
**Flexibilité :** On peut facilement changer les implémentations des services externes sans modifier le coeur de l'application. 

### Exemple concret :

*Une application de gestion de bibliothèque avec une interface utilisateur web et une base de données pour stocker les livres*

**Ports :** Définir des interfaces pour les opérations principales de l'application.

```python
# ports.py

from abc import ABC, abstractmethod
from typing import List

class Book: 
	def __init__(self, title: str, author: str):
		self.title = title
		self.author = author

class BookRepository(ABC):
	@abstractmethod
	def add_book(self, book: Book):
		pass

	@abstractmethod
	def list_book(self) -> List[Book]:
		pass
```

**Adapters :** Implémenter ces interfaces pour différentes sources de données. 

- Adapter pour une base de données SQL : 

```python
# sql_respository.py

from ports import BookRepository, Book
from typing import List

class SQLBookRepository(BookRepository):
	def __init__(self, connection):
		self.connection = connection

	def add_book(self, book: Book):
		cursor = self.connection.cursor()
		cursor.execute("INSERT INTO books (title, author) VALUES (?, ?), (book.title, book.author))
		self.connection.commit()

	def list_books(self) -> List[Book]:
        cursor = self.connection.cursor()
        cursor.execute("SELECT title, author FROM books")
        rows = cursor.fetchall()
        return [Book(title=row[0], author=row[1]) for row in rows]
```

- Adapter pour une API REST : 

```python

# api_repository.py

import requests
from ports import BookRepository, Book
from typing import List

class APIBookRepository(BookRepository):
    def __init__(self, api_url):
        self.api_url = api_url

    def add_book(self, book: Book):
        response = requests.post(f"{self.api_url}/books", json={'title': book.title, 'author': book.author})
        response.raise_for_status()

    def list_books(self) -> List[Book]:
        response = requests.get(f"{self.api_url}/books")
        response.raise_for_status()
        books_data = response.json()
        return [Book(title=book['title'], author=book['author']) for book in books_data]
```

- Utilisation : Injecter l'adaptateur approprié dans l'application : 

```python
# main.py

from sql_repository.py import SQLBookRepository
from api_repository.py import APIBookRepository
import sqlite3

# Exemple avec une base de données SQL
connection = sqlite3.connect('library.db')
sql_repo = SQLBookRepository(connection)
sql_repo.add_book(Book("1984", "George Orwell"))

# Exemple avec une API REST
api_repo = APIBookRepository("http://example.com/api")
api_repo.add_book(Book("Brave New World", "Aldous Huxley"))

```

**En Résumé :**

Le Port and Adapter Pattern nous aide à créer des applications flexibles et maintenables en isolant la logique métier des dépendances externes via des **interfaces (ports)** et des implémentations concrètes **adapters**.
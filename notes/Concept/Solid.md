**Utilisation :**
Concevoir des systèmes robustes, flexibles et faciles à maintenir. 

### **S** = Single Responsibility Principle (SRP):
**Principe d'une seule responsabilité**

==> Une classe ou un module ne **doit avoir qu'une seule responsabilité**

```md
En Django, ça pourrait signifier que chaque application gère un seul aspect du projet. 
Ex: une application pour la gestion des utilisateurs (`users`), une autre pour la logique de santé (`health`)
```


### **O** = Open/Closed Principle (OCP) :
**Principe Ouvert/Fermé**

==>  Les modules doivent être **ouverts à l'extension mais fermés à la modification**
==> Nouvelle fonctionnalité = Héritage 

```md
Utiliser des classes et des fonctions génériques et ajouter de nouvelles fonctionnalités par l'héritage ou la composition plutôt que de modifier le code existant.
```

### **L** : Liskov Substitution Principle (LSP)  :
**Principe de Substitution de Liskov**

 ==> Les objets d'une classe dérivée doivent pouvoir remplacer les objets de la classe de base sans altérer le fonctionnement du programme.

 Si on a une classe de base et une classe dérivée, on doit être capable d'utiliser des objets de la classe dérivée partout où on va utiliser des objets de la classe de base, sans que cela ne change le comportement correct du programme
 
```md
En python, s'assurer que les sous classes implémentent correctement les méthodes de la classe parente et respectent leur contrat
```

*Exemple : Une application qui gère différents types de véhicules. On a une classe de base appelée `Vehicle` et des classes dérivées comme `Car` et `Bicycle`* 

```python
class Vehicule: 
	def start_engine(self):
		pass

	def move(self):
		pass
```

```python
class Car(Vehicle): 
	def start_engine(self):
		print('starting car engine')

	def move(self):
		print('car is moving')

class Bicycle(Vehicle):
	def start_engine(self):
		raise Exception('Bicyles dont have engines')
	
	def move(self):
		print('Bicycle is moving')
```

La classe `Car` peut remplacer la classe `Véhicle` sans problème. Mais si on essaie de remplacer `Vehicle` par `Bicycle` et d'appeler `start_engine`, ça ne fonctionnera pas correctement car les vélos n'ont pas de moteur.

**LSP en action :**
Pour respecter LSP, on doit s'assurer que les classes dérivées `Car` et `Bicycle` peuvent être utilisées à la place de la classe de base `Vehicle` sans provoquer d'erreurs ou de comportements inattendus.

**Correction LSP :**

- Modifier la classe `Vehicle` pour qu'elle soit plus générale.
- S'assurer que toutes les classes dérivées respectent les attentes de la classe de base.

```python 
class Vehicle: 
	def move(self):
		pass

class Car(Vehicle): 
	def start_engine(self):
		print('starting engine')

	def move(self):
		self.start_engine()
		print('car is moving')

class Bicycle(Vehicle):
	def move(self):
		print('Bicyle is moving')
```

**Résultat**
=> La classe `Vehicle` est plus générale et ne suppose pas que tous les véhicule ont un moteur.
=> Les classe dérivées implémentent correctement la méthode `move` sans violer les attentes.

### **I** : Interface Segregation Principle (ISP) :
**Principe d'Interface de Segrégation**

Une classe **ne doit pas** être forcée **d'implémenter des interfaces qu'elle n'utilise pas**.

```md
Créer des interfaces spécifiques pour des besoins particuliers plutôt qu'une interface générale massive.
```

### **D** : Dependancy Inversion Principle (DIP) : 
**Principe d'Inversion de Dépendance**

- Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau. Les deux doivent dépendre d'abstractions (interfaces ou classes abstraites)
- Les abstractions ne doivent pas dépendre des détails. Les détails doivent dépendre des abstractions.

```md
Utiliser l'injection de dépendance pour injecter des services ou des repositories dans les classes plutôt que de les instancier directement.
```

*On construit une maison. On a des plans de la maison (`les abstractions`) et des ouvriers (`les détails`) pour réaliser ses plans. Les plans ne doivent pas dépendre de chaque ouvrier mais plutôt définir ce qui doit être fait (`les abstractions`). Les ouvriers suivent les plans pour construire la maison.*

**Sans DIP : **

- Module de haut niveau `House` : La classe principale qui coordonne la construction
- Module de bas niveau `Bricklayer`, `Plumber` : Les classes spécifiques qui réalisent des tâches précises.

```python
class Bricklayer:
	def lay_brick(self):
		print("laying bricks")

class Plumber:
	def install_pipes(self):
		print("installing pipes")

class House:
	def __init__(self):
		self.bricklayer = Bricklayer()
		self.plumber = Plumber()

	def build(self):
		self.bricklayer.lay_bricks()
		self.plumber.install_pipes()
	
```

=> Dans cet exemple `House` dépend directement des classes de bas niveau `Bricklayer` et `Plumber`. Si on veut changer de méthode de construction (par exemple, utiliser un autre type de brique) on va devoir modifier la classe `House`

**Avec DIP : **

Pour respecter DIP, on doit introduire des *abstractions*

- **Abstractions (Interfaces) :** Définir des interfaces pour les tâches 
- **Module de bas niveau :** Implémenter ces interfaces
- **Module de haut niveau :** Dépendre des interfaces, pas des implémentations spécifiques

```python 
from abc import ABC, abstractmethod

class Worker(ABC):
	@abstractmethod
	def work(self):
		pass

class Bricklayer(Worker):
	def work(self):
		print("laying bricks")

class Plumber(Worker):
	def work(self):
		print("installing pipes")

class House:
	def __init__(self, workers):
		self.workers = workers

	def build(self):
		for worker in self.workers:
			worker.work()
```
# Entrée :::

nom = input("Entrez votre nom: ")
print("Bonjour", nom)

age = input("Entrez votre age: ")
print(f"Vous êtes {age} ans.")

# Conversion de type

# str -> int => int(str)
nombre = input("Entrez un nombre: ")
nombre = int(nombre)

# str -> float => float()
# int, float -> str => str()

nombre = int(input("Entrez un nombre: "))
carre = nombre ** 2

import os

# funct pour clear la console
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')


# funct pour gérer les couleurs
def couleur_texte(texte, couleur):
    couleurs = {
        "rouge": "\033[91m",
        "vert": "\033[92m",
        "jaune": "\033[93m",
        "bleu": "\033[94m",
        "magenta": "\033[95m",
        "cyan": "\033[96m",
        "blanc": "\033[97m",
        "gris": "\033[90m",
        "fin": "\033[0m"
    }
    return f"{couleurs[couleur]}{texte}{couleurs['fin']}"


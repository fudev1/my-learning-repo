sec = int( input("Veuillez entrer un nombre de secondes: ") )

min = sec // 60
sec %= 60

heure = min // 60
min %= 60

jour = heure // 24
heure %= 24

print(jour, heure, min, sec)
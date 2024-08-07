sec = int( input("Veuillez entrer un nombre de secondes: ") )

jour = sec // 86_400
sec %= 86_400

heure = sec // 3_600
sec %= 3_600

min = sec // 60
sec %= 60

print(jour, heure, min, sec)
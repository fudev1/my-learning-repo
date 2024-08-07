tab = [2]

i = 1

while i < 10:
    tab.append(tab[i + 1] * 2)
    i += 1

print(tab)
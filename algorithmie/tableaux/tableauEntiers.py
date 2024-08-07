
entiers = []
i = 0
while len(entiers) < 6:
    entiers.append(int(input(f"nb{i+1} : ")))
    i += 1

i = 0
while i < len(entiers):
    print(entiers[i])
    i += 1
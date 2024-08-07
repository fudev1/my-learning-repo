import sys

i = 0
min = sys.maxsize
while i < 3:
    nb = int(input("Nb : "))
    if nb < min :
        min = nb
    i += 1

print(f"Le min est {min}")
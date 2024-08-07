i = 0
nb = int(input(f"Rentrez un nb : "))
exp = int(input("Rentrez l'exposant : "))

result = 1

if nb == 0 and exp == 0:
    print("Impossible!!!") 

else:      
 
    while i < abs(exp):
        result *= nb
        i += 1

    print( nb, "exposant", exp, "=", result if exp >= 0 else 1 / result , "😒")

    # if exp >= 0:
    #     print( nb, "exposant", exp, "=", result, "😒")
    # else:
    #     print( nb, "exposant", exp, "=", 1 / result, "😒")



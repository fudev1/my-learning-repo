age = -2

# [ -inf. ; inf. ]

if age >= 67: 
    # [67; inf.]
    print("Vous êtes retraité")
elif age >= 18:
    # age >= 18 and not(age >= 67)
    # [18; 66]
    print("Vous êtes majeur")
elif age < 0:
    # [-inf.; -1]
    print("age invalide")
else:
    # [0;17]
    print("Vous êtes mineur")

#
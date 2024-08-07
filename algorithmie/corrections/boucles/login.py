
realPassword = "Test1234="


cpt = 1
password = input("Rentrez votre mdp : ")

while password != realPassword and cpt < 3:
    password = input("Password invalid : ")
    cpt += 1

if password == realPassword:
    print("coucou")
else:
    print("Bloqué!")
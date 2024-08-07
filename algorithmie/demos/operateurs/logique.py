estBleu = False
estLigne = False

print( estBleu and estLigne ) 
# True and True      => True
# False and True     => False
# True and False     => False
# False and False    => False

print( estBleu or estLigne )
# True or True      => True
# False or True     => True
# True or False     => True
# False or False    => False

print( not estBleu )
# not True          => False
# not False         => True


# Loi de De Morgan
print( not( estBleu and estLigne ) )
print( not estBleu or not estLigne )

print( not( estBleu or estLigne ) )
print( not estBleu and not estLigne )



point = 15
reussite = point >= 10
echec = not (point >= 10)
echec = point < 10

temperature = 15

allumerChauffage = temperature >= 10 and temperature <= 20
fermerChauffage = not (temperature >= 10 and temperature <= 20)
fermerChauffage = temperature < 10 or temperature > 20
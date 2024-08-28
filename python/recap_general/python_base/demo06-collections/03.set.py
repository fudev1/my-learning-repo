# ------------------------------------------------------------------------------
# Les sets
# ------------------------------------------------------------------------------

# Création d'un set :
animaux = { "chat", "chien", "oiseau" }

# ajouter un élement :
animaux.add("poisson")
print(animaux)             # affiche: { 'chat', 'chien', 'oiseau', 'poisson' }

# ajouter plusieurs éléments :
animaux.update(['lion', 'tigre'])
print(animaux)             # affiche: { 'chat', 'chien', 'oiseau', 'poisson', 'lion', 'tigre' }

# supprimer un élement spécifique :
animaux.remove('oiseau')
print(animaux)             # affiche: { 'chat', 'chien', 'poisson', 'lion', 'tigre' }

# vérifier si un élément est dans le set :
print("poisson" in animaux) # affiche: True
print("lapin" in animaux)   # affiche: False

# ------------------------------------------------------------------------------
# opération sur les sets: 
# ------------------------------------------------------------------------------
ensemble1 = {1, 2, 3}
ensemble2 = {2, 3, 4}

"""
union de deux sets : |
"""
# Prendre tous les éléments des deux ensembles à rassembler dans un même ensemble
ensemble_union = ensemble1 | ensemble2
print(ensemble_union) # affiche: {1, 2, 3, 4}

# => l'union trie les éléments (si string il sera à la fin des chiffre) 
# => si int à 0 il sera placé en premier 
# => si int à 9 il sera placé en dernier

"""
intersection de deux sets : &
"""
print(ensemble1 & ensemble2) # affiche: {2, 3}

"""
différence de deux sets : -
"""
print(ensemble1 - ensemble2) # affiche: {1}
print(ensemble2 - ensemble1) # affiche: {4}



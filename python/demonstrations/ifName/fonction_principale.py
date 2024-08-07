import module_extérieur as me
"""
En Python, la condition if __name__ == "__main__": est utilisée pour déterminer si
un fichier Python est exécuté en tant que script principal ou s'il est importé
en tant que module dans un autre script.
"""
if __name__ == '__main__':
    print(__name__)
    print(me.fonctionDuModuleExterieur())

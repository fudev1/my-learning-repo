# todo : définir la class de base Animal


"""classe de base Animal qui récupère tous les attributs communs à toutes les classes dérivées"""

class Animal():
    def __init__(self, nom, poids, taille, age, date_arrivee):
        self.__nom = nom
        self.__poids = poids
        self.__taille = taille
        self.__age = age
        self.__age_humain = 0
        self.__date_arrivee = date_arrivee


    #region PROPERTIES
    @property
    def nom(self, nom):
        return self.__nom

    @nom.setter
    def nom(self, value):
        return self.__nom

    @property
    def poids(self, poids):
        return self.__poids

    @poids.setter
    def poids(self, value):
        return self.__poids

    @property
    def taille(self, taille):
        return self.__taille

    @taille.setter
    def taille(self, value):
        return self.__taille

    @property
    def age(self, age):
        return self.__age

    @age.setter
    def age(self, value):
        return self.__age

    @property
    def date_arrivee(self, date_arrivee):
        return self.__date_arrivee

    @date_arrivee.setter
    def date_arrivee(self, value):
        return self.__date_arrivee

    #endregion PROPERTIES

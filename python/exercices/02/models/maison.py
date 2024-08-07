from  models.adresse import Adresse

class Maison:

    def __init__(self, adresse, surface, nb_piece, nb_etage, surface_jardin = 0):
        if nb_piece <= 0:
            raise ValueError("Nb piece negatif!")
        if not isinstance(adresse, Adresse):
            raise TypeError("L'adresse doit etre de type Adresse!")

        self.__adresse = adresse
        self.__surface = surface
        self.__nb_piece = nb_piece
        self.__nb_etage = nb_etage
        self.__nb_garage = 0
        self.__surface_jardin = surface_jardin


    @property
    def adresse(self):
        return self.__adresse

    @adresse.setter
    def adresse(self, value):
        self.__adresse = value


    @property
    def surface(self):
        return self.__surface

    @surface.setter
    def surface(self, value):
        self.__surface = value


    @property
    def surface_jardin(self):
        return self.__surface_jardin

    @surface_jardin.setter
    def surface_jardin(self, value):
        self.__surface_jardin = value


    @property
    def nb_etage(self):
        return self.__nb_etage

    @nb_etage.setter
    def nb_etage(self, value):
        self.__nb_etage = value


    @property
    def nb_piece(self):
        return self.__nb_piece

    @nb_piece.setter
    def nb_piece(self, value):
        self.__nb_piece = value


    @property
    def nb_garage(self):
        return self.__nb_garage

    @nb_garage.setter
    def nb_garage(self, value):
        self.__nb_garage = value



    # Propriété calculer
    @property
    def a_jardin(self):
        return self.__surface_jardin > 0



    #region Méthode
    def resumer(self):

        msg = "Cette maison se situe a l'adresse : " + self.adresse.format() + "\n"
        msg += "Elle a " + str(self.nb_piece) + "piece(s) sur " + str(self.nb_etage) + " etage(s) \n"
        msg += "La surface est de " + str(self.surface) + "m^2"

        if self.a_jardin:
            msg += " et un jardin de " + str(self.surface_jardin) + "m^2."
        else:
            msg += "."

        return  msg
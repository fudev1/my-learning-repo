class Circuit:

    def __init__(self, nom, distance, max_place):
        """
        :param nom: nom du circuit
        :param distance: en mètre
        :param max_place: nombre de places max sur le circuit
        """
        self.__nom = nom
        self.__distance = distance
        self.__max_place = max_place

    #region PROPERTIES
    @property
    def nom(self):
        return self.__nom

    @nom.setter
    def nom(self, value):
        self.__nom = value

    @property
    def distance(self):
        return self.__distance

    @distance.setter
    def distance(self, value):
        self.__distance = value

    @property
    def max_place(self):
        return self.__max_place
    #endregion

    def __str__(self):
        km = self.distance / 1000
        return "{0} - {1}km".format(self.nom, km)

# circuit = Circuit("Circuit", 5, 5)
# print(circuit)
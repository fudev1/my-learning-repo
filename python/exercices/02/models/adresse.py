class Adresse:

    def __init__(self, rue, numero, ville, code_postal):
        self.__rue = rue
        self.__numero = numero
        self.__ville = ville
        self.__code_postal = code_postal
        self.__boite = None


    #region Props

    @property
    def rue(self):
        return self.__rue

    @rue.setter
    def rue(self, value):
        self.__rue = value


    @property
    def numero(self):
        return  self.__numero

    @numero.setter
    def numero(self, value):
        self.__numero = value


    @property
    def ville(self):
        return self.__ville

    @ville.setter
    def ville(self, value):
       self.__ville = value


    @property
    def code_postal(self):
        return self.__code_postal

    @code_postal.setter
    def code_postal(self, value):
        self.__code_postal = value


    @property
    def boite(self):
        return self.__boite

    @boite.setter
    def boite(self, value):
        self.__boite = value

    #endregion

    #region Methode
    def format(self):
        msg = self.rue + " " + str(self.numero)

        # if self.boite != None:
        if self.boite is not None:
            msg += "(" + str(self.boite) + ")"

        msg += ", " + str(self.code_postal) + " " + self.ville

        return msg


    def format_demo(self):

        if self.boite is not None:
            msg = "{0} {1}({2}), {3} {4}".format(self.rue, self.numero, self.boite, self.code_postal, self.ville)
        else:
            msg = "{} {}, {} {}".format(self.rue, self.numero, self.code_postal, self.ville)

    #endregion
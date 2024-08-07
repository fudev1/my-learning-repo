class Livre:
    """
    zaeazeazezaezeaz documentation
    """

    #region constructeur

    def __init__(self, titre, auteur, pages):
        """
            ceci est de la doc
        :param titre: azezae
        :param auteur: azeaze
        :param pages: azeaze
        """
        self.titre = titre
        self.auteur = auteur
        self.pages = pages

    #endregion

    # region représentation
    """
    Objectif: Fournir une représentation "officielle" de l'objet, souvent utilisée pour le debugging.
    Donner une représentation non ambiguë et détaillée de l'objet, idéalement sous forme d'une chaîne de caractères qui 
    pourrait être utilisée pour recréer l'objet
    """
    def __repr__(self):
        return f"Livre(titre='{self.titre}', auteur='{self.auteur}', pages={self.pages})"

    # endregion

    # region str
    """
    Objectif: Fournir une représentation "informelle" ou "lisible" par l'utilisateur final.
    Rendre la sortie agréable et facile à lire pour les utilisateurs finaux.
    
    """
    def __str__(self):
        return f"'{self.titre}' par {self.auteur}, {self.pages} pages"

    # endregion

    # region eq
    def __eq__(self, other):
        if isinstance(other, Livre):
            return self.titre == other.titre and self.auteur == other.auteur
        return False

    # endregion

    # region lt

    def __lt__(self, other):
        if isinstance(other, Livre):
            return self.pages < other.pages
        return NotImplemented

    # endregion

    # region add

    def __add__(self, other):
        if isinstance(other, Livre):
            return self.pages + other.pages
        return NotImplemented

    # endregion

#
# livre1 = Livre("Livre1", "<NAME>", 5)
# print(livre1.__class__)
# print(livre1.__dict__)
# print(livre1.__doc__)
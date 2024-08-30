

class Parcelle:
    def __init__(self, cout):
        self.cout = cout
        self.est_occupee = False

    def occuper(self):
        self.est_occupee = True

    
from models.adresse import Adresse
from models.maison import Maison


if __name__ == '__main__':

    adr = Adresse("Rue de bruxelles", 42, "Namur", 5000)
    m1 = Maison(adr, 200, 5, 2)

    adr2 = Adresse("Rue de bruxelles", 40, "Namur", 5000)
    m2 = Maison(adr2, 500, 3, 1, 1000)

    print("Maison 1")
    print(m1.resumer())

    print("Maison 2")
    print(m2.resumer())



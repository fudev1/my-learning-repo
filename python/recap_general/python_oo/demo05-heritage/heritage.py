from models.Vehicule import Vehicule
from models.VehiculeThermique import VehiculeThermique
from models.VehiculeElectrique import VehiculeElectrique
from models.VoitureHybride import VoitureHybride

# Création des véhicules

v = Vehicule("VMarque", "VModele", 2015)
print(v.demarrer())
print(v.klaxonner())
print(v)
print()

vt = VehiculeThermique("VTMarque", "VTModele", 2019, 50)
print(vt.demarrer())
print(vt.klaxonner())
print(vt)
print()

ve = VehiculeElectrique("VEMarque", "VEModele", 2011, 300)
print(ve.demarrer())
print(ve.klaxonner())
print(ve)
print()

vh = VoitureHybride("VHMarque", "VHModele", 2024, 60, 700, 5)
print(vh.demarrer())
print(vh.klaxonner())
print(vh)
print()
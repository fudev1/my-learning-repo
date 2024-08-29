from models.Voiture import Voiture, saluer

kia_ceed = Voiture("Kia", "Ceed")
opel_corsa = Voiture("Opel", "Corsa")

print(f"Voiture Kia Ceed: {kia_ceed}")
print(f"Voiture Opel Corsa: {opel_corsa}")

saluer()
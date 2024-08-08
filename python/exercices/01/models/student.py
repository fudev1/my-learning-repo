class Student:

    def __init__(self, firstname, lastname, birthdate, grade):
        self.firstname = firstname
        self.lastname = lastname
        self.matricule = firstname[:3] + lastname[:3]
        self.birthdate = birthdate
        self.grade = grade
        self.year_result = None

    def skip_class(self):
        print(f"{self.firstname} {self.lastname} seche les cours!")

    def go_to_class(self, course):
        print(f"{self.firstname} {self.lastname} va en cours de {course}")



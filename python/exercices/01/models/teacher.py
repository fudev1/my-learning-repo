class Teacher:

    def __init__(self, firstname, lastname, hire_date, email, age):
        self.firstname = firstname
        self.lastname = lastname
        self.hire_date = hire_date
        self.email = email
        self.age = age
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value): 
        if value < 0:
            raise ValueError("L'âge ne peut pas être négatif")
        self._age = value


    def teach(self, course):
        print( self.firstname + " " + self.lastname + " donne cours de " + course)
        print(f"le prof a {self.age} ans")

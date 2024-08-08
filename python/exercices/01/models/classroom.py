from models.student import Student
import random

class Classroom:

    def __init__(self, main_teacher, nb_place):
        self.nbr_mur = 4;
        self.nb_place = nb_place
        self.students = []
        self.main_teacher = main_teacher


    def add_student(self, new_student):
        if isinstance(new_student, Student):
            if self.nb_place > len(self.students):
                self.students.append(new_student)


    def start_course(self, teacher, course):
        teacher.teach(course)

        for student in self.students:

            if random.randint(0,10) > 2:
                student.go_to_class(course)
            else:
                student.skip_class()

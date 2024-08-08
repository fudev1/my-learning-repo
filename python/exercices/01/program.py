from models.student import Student
from models.teacher import Teacher
from models.classroom import Classroom
import datetime

if __name__ == '__main__':
    try:
        balthazar = Teacher("Balthazar", "Picsou", datetime.date(1947, 1, 1), "b.piscou@technobel.be", 12)
    except ValueError as e:
        print(e)

    riri = Student("Riri", "Duck", datetime.date(1997, 1, 1), 2)
    zaza = Student("Zaza", "Vanderquack", datetime.date(1998, 1, 1), 1)

    c = Classroom(balthazar, 12)

    c.add_student(riri)
    c.add_student(zaza)

    c.start_course(balthazar, "sport")

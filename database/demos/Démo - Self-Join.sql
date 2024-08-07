USE DemoJoin
GO

CREATE TABLE Employee(
	Emp_id INT IDENTITY PRIMARY KEY,
	last_name VARCHAR(50) NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	Supervisor_id INT
)
GO

ALTER TABLE Employee ADD CONSTRAINT FK_Employee_Supervisor FOREIGN KEY (Supervisor_id) REFERENCES Employee(Emp_id)
GO

INSERT INTO Employee(last_name, first_name, Supervisor_id) 
	VALUES ('Morre','Thierry', NULL),
			('Person', 'Michael', 1),
			('Legrain','Samuel',1),
			('Aude','Beurive',3),
			('Jérémy','Bazin',2),
			('Gavin','Chaineux',2)
GO

SELECT * FROM Employee

SELECT
	Emp.last_name AS 'Nom Employee',
	Emp.first_name AS 'Prénom Employee',
	Sup.last_name AS 'Nom Superviseur',
	Sup.first_name AS 'Prénom Superviseur'
	FROM Employee Emp LEFT JOIN Employee Sup
		ON Emp.Supervisor_id = Sup.Emp_id
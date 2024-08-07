CREATE DATABASE DemoJoin
GO

USE DemoJoin
GO

CREATE TABLE Auteur(
	Ref INT IDENTITY PRIMARY KEY, 
	Prenom VARCHAR(50) NOT NULL,
	Nom VARCHAR(50) NOT NULL,
	Pseudo VARCHAR(50) NOT NULL,
	DateNaissance DATE NOT NULL
)

CREATE TABLE Livre(
	Titre VARCHAR(100) PRIMARY KEY,
	RefAuteur INT NOT NULL,
	ISBN CHAR(12),
	DateParrution INT NOT NULL
)
GO

ALTER TABLE Livre ADD CONSTRAINT FK_Livre_Auteur FOREIGN KEY (RefAuteur) REFERENCES Auteur(Ref)
GO

INSERT INTO Auteur(Prenom, Nom, Pseudo, DateNaissance)
	VALUES ('Albert','Camus','Bebert', '1913-11-07'),
			('Jean-Paul','Sartre','Jy-Pé','1905-06-21')

INSERT INTO Livre VALUES ('La Peste', 1, '978-20703604',1974),
						('La chute', 1, '978-20703109',1973),
						('Huis-clos', 2, NULL,1943)
GO

USE DemoJoin
GO

SELECT *
	FROM Auteur JOIN Livre ON Ref = RefAuteur
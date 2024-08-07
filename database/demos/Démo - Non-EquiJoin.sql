USE DBSlide
GO

SELECT * FROM Grade

SELECT first_name, last_name, year_result, grade
	FROM student JOIN Grade
		ON year_result BETWEEN lower_bound AND upper_bound
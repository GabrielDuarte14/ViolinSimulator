CREATE DATABASE bdViolinSimulator;

USE bdViolinSimulator;

CREATE TABLE tbUsuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT
    ,nomeUsuario VARCHAR(100)
    ,emailUsuario VARCHAR(100)
    ,senhaUsuario VARCHAR(30)
);

CREATE TABLE tbPergunta(
	idPergunta INT PRIMARY KEY AUTO_INCREMENT
    ,pergunta VARCHAR(150)
    ,respostaCerta VARCHAR(150)
    ,respostaErrada1 VARCHAR(150)
    ,respostaErrada2 VARCHAR(150)
);

CREATE TABLE tbQuiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT
    ,qtdCertas INT
    ,qtdErradas INT
    ,fkUsuario INT
    ,dataHora DATETIME
    ,FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario)
);

INSERT INTO tbPergunta
	VALUES (null, 'Quantas cordas tem no violino?','4','2','3')
		   ,(null, 'Quantas linhas tem numa partitura?','5','3','2')
		   ,(null, 'O violino toca em qual clave?','Clave de Sol','Clave de Lá','Clave de Dó')
		   ,(null, 'Com quantos anos eu comecei a tocar violino?','11 anos','10 anos','5 anos')
		   ,(null, 'Em qual ano comecei a aprender teoria musical?','2013','2010','2015');
           
           
SELECT * FROM tbQuiz ORDER BY dataHora;

select * from tbUsuario
create database BibliotecaDB;
use BibliotecaDB;


create table Autores(
	id_autor int auto_increment primary key (id_autor),
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nacionalidade varchar(30)
);

create table Categorias(
	id_categoria int auto_increment primary key (id_categoria),
    descricao varchar(50) not null
);

create table Livros(
	id_livro int auto_increment primary key (id_livro),
    titulo varchar(100) not null,
    ano_publicacao year,
    id_autor int,
    id_categoria int,
    constraint fk_livro_autor foreign key (id_autor) references Autores(id_autor),
    constraint fk_livro_categoria foreign key (id_categoria) references Categorias(id_categoria)
);



-- Insercao de Dados

-- Autores
INSERT INTO Autores (autor_nome, sobrenome, nacionalidade) VALUES
('Joao', 'Silva', 'Brasileiro'),
('Maria', 'Oliveira', 'Portuguesa'),
('Carlos', 'Santos', 'Brasileiro'),
('Ana', 'Pereira', 'Espanhola'),
('Pedro', 'Gomes', 'Argentino');

-- Categorias
INSERT INTO Categorias (descricoes) VALUES
('Ficcao'),
('Nao-Ficcao'),
('Historia'),
('Ciencia');

-- Livros
INSERT INTO Livros (livro_titulo, ano, id_autor, id_categoria) VALUES
('O Misterio do Lago', 2015, 1, 1),
('Historia do Brasil', 2018, 3, 3),
('A Ciencia da Vida', 2020, 5, 4),
('Contos de Fadas', 2012, 2, 1),
('Memorias de um Viajante', 2019, 4, 2),
('A Revolucao Industrial', 2017, 3, 3);

SELECT * FROM Autores WHERE 'Brasileiro';
SELECT livro_titulo, ano FROM Livros WHERE ano > 2015;
SELECT * FROM Categorias WHERE descricoes LIKE "C%";
SELECT COUNT(id_categoria) FROM Categorias;
UPDATE Autores SET nacionalidade = 'Portuguesa' WHERE id_autor = 4;
UPDATE Livros SET ano = 2016 WHERE id_livro = 1;
UPDATE Categorias SET descricoes = 'Biografia' WHERE id_categoria = 2;
DELETE FROM Categorias WHERE id_categoria = 1;
DELETE FROM Autores WHERE id_autor = 3;
SELECT * FROM Livros WHERE id_categoria = 1;
SELECT autor_nome, sobrenome FROM Autores WHERE autor_nome LIKE "%a";

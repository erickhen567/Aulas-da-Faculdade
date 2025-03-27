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

-- Clientes
INSERT INTO Autores (autor1_nome, sobrenome, nacionalidade) VALUES
('Joao', 'Silva', 'Brasileiro'),
('Maria', 'Oliveira', 'Portuguesa'),
('Carlos', 'Santos', 'Brasileiro'),
('Ana', 'Pereira', 'Espanhola'),
('Pedro', 'Gomes', 'Argentino');

-- Funcionarios
INSERT INTO Categorias () VALUES
('Ficcao'),
('Nao-Ficcao'),
('Historia'),
('Ciencia');

-- Veiculos
INSERT INTO Livros (livro1_titulo, ano, id_autor, id_categoria) VALUES
('O Misterio do Lago', '2015', 1, 1),
('Historia do Brasil', '2018', 3, 3),
('A Ciencia da Vida', '2020', 5, 4),
('Contos de Fadas', '2012', 2, 1),
('Memorias de um Viajante', '2019', 4, 2),
('A Revolucao Industrial', '2017', 3, 3);

SELECT 

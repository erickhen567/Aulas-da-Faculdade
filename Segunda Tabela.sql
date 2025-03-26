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
    ano_publicacao year
    id_autor int,
    id_categoria int
);

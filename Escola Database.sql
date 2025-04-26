CREATE DATABASE escoladb;
USE escoladb;

CREATE TABLE Professor (
	id_professor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    materia VARCHAR(50) NOT NULL
);

CREATE TABLE Aluno (
	id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    turma VARCHAR(10) NOT NULL
);

CREATE TABLE Coordenacao (
	id_coordenacao INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Direcao (
	id_direcao INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL
);

INSERT INTO Professor (nome, materia)
VALUES
("Roberto Pereira", "Matematica"),
("Larissa Nunes", "Artes"),
("Erick Henrique", "Ingles"),
("Felipe Oliveira", "Biologia"),
("Pablo Antunes", "Fisica"),
("Hellen de Souza", "Sociologia"),
("Jose Teixeira", "Filosofia"),
("Josue Clementino", "Educacao Fisica"),
("Eva", "Portugues"),
("Mateus Costa", "Historia"),
("Carlos Nasciemnto", "Quimica"),
("Amanda Fernandes", "Espanhol"),
("Ana Alves", "Geografia");

INSERT INTO Aluno (nome, turma)
VALUES
("Hugo Mendonca", "A"),
("Luiza Souza", "B"),
("Isabella Gomes", "C"),
("Leon Kennedy", "D"),
("Ada Wong", "E");

INSERT INTO Coordenacao (nome)
VALUES
("Ellen Ribeiro"),
("Cristina Santos");

INSERT INTO Direcao (nome, cargo)
VALUES
("Jose Joao", "Diretor"),
("Neide Pereira", "Vice-Diretora");



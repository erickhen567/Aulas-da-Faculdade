CREATE DATABASE escoladb;
USE escoladb;

-- Tabela Professor
CREATE TABLE Professor (
	id_professor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    materia VARCHAR(50) NOT NULL,
);

CREATE TABLE aluno (
	id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    turma VARCHAR(10) NOT NULL,
);

CREATE TABLE coodenacao (
	id_coordenacao INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,

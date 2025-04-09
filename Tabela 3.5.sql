
CREATE DATABASE db_venda_veiculo;
USE db_venda_veiculo;

-- Tabela Funcionario
CREATE TABLE Funcionario (
    id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL DEFAULT 0,
    departamento VARCHAR(50) NOT NULL
);

-- Tabela Veiculo
CREATE TABLE Veiculo (
    id_veiculo INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    modelo VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    ano_fabricacao INT NOT NULL CHECK (ano_fabricacao >= 1900),
    status ENUM('Disponivel', 'Vendido') NOT NULL DEFAULT 'Disponivel'
);

-- Tabela Cliente
CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cnh VARCHAR(20) NOT NULL UNIQUE,
    placa_veiculo VARCHAR(10),  
    tipo_cliente ENUM('Fisica', 'Juridica') NOT NULL,
    cartao_pagamento VARCHAR(50) NOT NULL
);

-- Tabela Venda
CREATE TABLE Venda (
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    valor_venda DECIMAL(10, 2) NOT NULL,
    data_venda DATE NOT NULL,
    id_veiculo INT NOT NULL UNIQUE,  
    id_funcionario INT NOT NULL,
    id_cliente INT NOT NULL,
    CONSTRAINT fk_veiculo_venda FOREIGN KEY (id_veiculo) REFERENCES Veiculo (id_veiculo) ON DELETE RESTRICT,
    CONSTRAINT fk_funcionario_venda FOREIGN KEY (id_funcionario) REFERENCES Funcionario (id_funcionario) ON DELETE RESTRICT,
    CONSTRAINT fk_cliente_venda FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente) ON DELETE RESTRICT
);



-- Insercao de Dados

-- Clientes
INSERT INTO Cliente (nome, cnh, tipo_cliente, cartao_pagamento) VALUES
('Allan', '12345678901', 'Fisica', '4111111111111111'),
('Empresa X', '123456789012345', 'Juridica', '5222222222222222'),
('Allefy', '98765432100', 'Fisica', '6333344444444444'),
('Patricia', '98765432101', 'Fisica', '6333333333333335'),
('Ricardo', '98765432102', 'Fisica', '6333333333333337');

-- Funcionarios
INSERT INTO Funcionario (nome, salario, departamento) VALUES
('Carlos Souza', 2500.00, 'Vendas'),
('Ana Costa', 3000.00, 'Administracao'),
('Pedro Lima', 2800.00, 'Vendas'),
('William Malvezzi', 30000.00, 'RH'),
('Wemerson', 5000.00, 'Estoque');

-- Veiculos
INSERT INTO Veiculo (marca, placa, valor, modelo, ano_fabricacao) VALUES
('Ford', 'DEF1234', 65000, 'Fiesta', 2018),
('Toyota', 'XCV3456', 137000, 'Corolla', 2020),
('Chevrolet', 'LMO4321', 55000, 'Onix', 2019);

-- Vendas
INSERT INTO Venda (valor_venda, data_venda, id_veiculo, id_cliente, id_funcionario) VALUES
(45000.00, '2024-01-15', 1, 1, 1),
(75000.00, '2024-02-20', 2, 2, 2),
(50000.00, '2024-03-10', 3, 3, 3);



-- Consultas

-- Selecionando todas as tabelas
SELECT * FROM Cliente;
SELECT * FROM Funcionario;
SELECT * FROM Veiculo;
SELECT * FROM Venda;

-- Consulta de veiculos vendidos
SELECT 
    Veiculo.marca, Veiculo.modelo, Veiculo.ano_fabricacao, Veiculo.placa,
    Venda.valor_venda, Venda.data_venda,
    Cliente.nome AS nome_cliente,
    Funcionario.nome AS nome_funcionario
FROM Veiculo
INNER JOIN Venda ON Veiculo.id_veiculo = Venda.id_veiculo
INNER JOIN Cliente ON Venda.id_cliente = Cliente.id_cliente
INNER JOIN Funcionario ON Venda.id_funcionario = Funcionario.id_funcionario;

select avg(valor_venda) from venda;

-- Valor medio de todas as vendas
CREATE VIEW media_vendas AS
SELECT
    ROUND(AVG(valor_venda), 2) AS media_valor_venda,
    COUNT(*) AS total_vendas
FROM Venda;

select * from media_vendas;

-- Valor medio das vendas por funcionario
CREATE VIEW media_vendas_por_funcionario AS
SELECT
    id_funcionario,
    ROUND(AVG(valor_venda), 2) AS media_valor_venda,
    COUNT(*) AS total_vendas
FROM Venda
GROUP BY id_funcionario;

SELECT * FROM media_vendas_por_funcionario;


-- Se desejar incluir o nome do funcionario (supondo que exista a tabela Funcionario), voce pode fazer um JOIN
CREATE VIEW media_vendas_por_funcionario AS
SELECT
    f.nome AS nome_funcionario,
    ROUND(AVG(v.valor_venda), 2) AS media_valor_venda,
    COUNT(*) AS total_vendas
FROM Venda v
JOIN Funcionario f ON v.id_funcionario = f.id_funcionario
GROUP BY f.nome;

SELECT * FROM media_vendas_por_funcionario;

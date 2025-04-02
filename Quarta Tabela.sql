CREATE DATABASE db_venda_veiculo;
USE db_venda_veiculo;

-- Tabela Funcionário
CREATE TABLE Funcionario (
    id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL DEFAULT 0,
    departamento VARCHAR(50) NOT NULL
);

-- Tabela Veículo
CREATE TABLE Veiculo (
    id_veiculo INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    modelo VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    ano_fabricacao INT NOT NULL CHECK (ano_fabricacao >= 1900),
    status ENUM('Disponível', 'Vendido') NOT NULL DEFAULT 'Disponível'
);

-- Tabela Cliente
CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cnh VARCHAR(20) NOT NULL UNIQUE,
    tipo_cliente ENUM('Física', 'Jurídica') NOT NULL,
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


delimiter $$

create procedure inserir_clientes()
begin
	declare i int default 1;
    while i <= 50 do
		insert into Cliente (nome, cnh, tipo_cliente, cartao_pagamento)
        values (
				concat('Cliente', i),
                concat('CNH', lpad(i, 10, '0')),
                if (i % 2 = 0, 'Física', 'Jurídica'),
                lpad(floor(rand() * 100000000000000000), 16, '0')
			);
            set i = i + 1;
	end while;
end $$

delimiter ;
call inserir_clientes();

SELECT * FROM Cliente;


-- Se quiser usar um novo Banco de Dados use DROP DATABASE 'nome do banco'
-- Códido completo https://dontpad.com/malvader
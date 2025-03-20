create database db_venda_veiculo;
use db_venda_veiculo;

create table Cliente(
	id_cliente int unsigned not null auto_increment,
	nome varchar(50) not null,
	cnh varchar(11) unique,
	placa_veiculo varchar(7),
	tipo_cliente enum('Fisica','Juridica') not null,
	cartao_pagamento varchar(16) not null,
	primary key (id_cliente)
	);
    
    -- Tabela Funcionario
    create table Funcionario(
		id_funcionario int unsigned not null auto_increment,
        nome varchar(50) not null,
		salario decimal(10,2) not null default '0',
        departamento varchar(50) not null,
        primary key(id_funcionario)
        );

-- Tabela Veiculo
create table Veiculo(
	id_veiculo int unsigned not null auto_increment,
    marca varchar(50) not null,
    modelo varchar(50) not null,
    placa varchar(7) not null unique,
    valor decimal(10,2) not null,
    ano_fabricacao int not null check (ano_fabricacao >= 2010),
    status enum('Disponivel','Vendido') not null default 'Disponivel',
    primary key(id_veiculo)   
);

-- Tabela Venda
create table Venda(
	id_venda int unsigned not null auto_increment,
    valor_venda decimal(10,2) not null,
    data_venda date not null,
    id_cliente int unsigned not null,
    id_funcionario int unsigned not null,
	id_veiculo int unsigned not null,
    constraint fk_cliente_venda foreign key(id_cliente) references Cliente(id_cliente) on delete restrict,
    constraint fk_funcionario_venda foreign key(id_funcionario) references Funcionario(id_funcionario) on delete restrict,
    constraint fk_veiculo_venda foreign key(id_veiculo) references Veiculo(id_veiculo) on delete restrict,
    primary key(id_venda)
);
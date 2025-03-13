create database db_venda_veiculo;
use db_venda_veiculo;

create table cliente(
	id_cliente int unsigned not null auto_increment,
	nome varchar(50) not null,
	cnh varchar(20) unique,
	tipo_cliente varchar(20) not null,
	check (tipo_cliente in('Fisica','Juridica')),
	cartao varchar(16) not null,
	primary key (id_cliente)
	);
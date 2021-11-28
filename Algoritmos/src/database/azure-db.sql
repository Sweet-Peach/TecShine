CREATE TABLE administrador (
	id_administrador INT PRIMARY KEY IDENTITY(1,1),
	razao_social VARCHAR(50),
    cnpj VARCHAR(18),
	email VARCHAR(100),
	senha VARCHAR(30),
    telefone VARCHAR(14),
    constraint UN_EmailAdministrador UNIQUE(email)
);

INSERT INTO administrador (razao_social, cnpj, telefone, email, senha) VALUES
    ('maria ltda', '123.456.78/9000-11', '1146764796', 'maria@maria.com','12345678');

select * from administrador;


CREATE TABLE condominio (
    id_condominio INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(45),
    cep VARCHAR(9),
    numero VARCHAR(5),
    thumbnail varchar(50),
    id_administrador INT REFERENCES administrador(id_administrador)
);

INSERT INTO condominio(nome, cep,numero, thumbnail, id_administrador)
VALUES ('Residencial das flores', '08535040', '2004', 'condominio001.jpg', 1),
('Conjunto Casa Grande', '08535040', '407', 'condominio002.jpg', 1),
('Conjunto Guanabara', '08502404', '105', 'condominio003.jpg', 1);

CREATE TABLE registro (
    id_registro INT PRIMARY KEY IDENTITY(1,1),
    horario DATETIME,
    pessoas INT,
    id_condominio INT REFERENCES condominio(id_condominio)
);

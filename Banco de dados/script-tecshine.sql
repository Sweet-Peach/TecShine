create database bdtecshine;
use bdtecshine;
-- -----------------------------------------------------
-- Table tb_administradora
-- -----------------------------------------------------
CREATE TABLE tb_administradora(
  id_adm INT NOT NULL auto_increment PRIMARY KEY ,
  nome_razao_social_adm VARCHAR(45) NOT NULL,
  nome_cond VARCHAR(45) NOT NULL,
  telefone_adm VARCHAR(14) NULL,
  email_adm VARCHAR(45) NOT NULL,
  cep VARCHAR(9) NULL,
  endereço VARCHAR(45) NULL,
  numero VARCHAR(5) NULL,
  complemento VARCHAR(45) NULL
);
-- -----------------------------------------------------
-- Table tb_condominio
-- -----------------------------------------------------
CREATE TABLE tb_condominio (
  id_cond INT NOT NULL auto_increment PRIMARY KEY,
  nome_razao_social_adm VARCHAR(45) NOT NULL,
  nome_cond VARCHAR(45) NOT NULL,
  telefone_cond VARCHAR(14) NULL,
  email_cond VARCHAR(45) NOT NULL,
  cep VARCHAR(9) NULL,
  endereço VARCHAR(45) NULL,
  numero VARCHAR(5) NULL,
  complemento VARCHAR(45) NULL,
  fk_adm INT NOT NULL,
  FOREIGN KEY (fk_adm) REFERENCES tb_administradora (id_adm)
);

-- -----------------------------------------------------
-- Table tb_usuario
-- -----------------------------------------------------
CREATE TABLE tb_usuario_login(
  id_usuario INT NOT NULL auto_increment PRIMARY KEY,
  cnpj_usuario VARCHAR(45) NOT NULL,
  senha_usuario  VARCHAR(25) NOT NULL,
  fk_cond INT NULL,
  fk_adm INT NOT NULL,
  FOREIGN KEY (fk_cond) REFERENCES tb_condominio (id_cond),
  FOREIGN KEY (fk_adm) REFERENCES tb_administradora (id_adm)
);

-- -----------------------------------------------------
-- Table tb_espaco
-- -----------------------------------------------------
CREATE TABLE tb_espaco (
  id_espaco INT NOT NULL auto_increment PRIMARY KEY,
  nome_espaco VARCHAR(45) NOT NULL,
  andar VARCHAR(2) NOT NULL,
  fk_cond INT NOT NULL,
  FOREIGN KEY (fk_cond) REFERENCES tb_condominio (id_cond)
);


-- -----------------------------------------------------
-- Table tb_sensores
-- -----------------------------------------------------
CREATE TABLE tb_sensores (
  id_sensor INT NOT NULL auto_increment PRIMARY KEY,
  nome_sensor VARCHAR(45) NULL,
  fk_espaco INT NOT NULL,
  FOREIGN KEY (fk_espaco) REFERENCES tb_espaco (id_espaco)
);

-- -----------------------------------------------------
-- Table tb_movimentacao
-- -----------------------------------------------------
CREATE TABLE tb_movimentacao (
  id_mov INT NOT NULL auto_increment PRIMARY KEY,
  horario DATETIME NOT NULL,
  ativacao boolean NOT NULL, /*ele so aceita 1 ou 0 no insert*/
  fk_sensor INT NOT NULL,
  FOREIGN KEY (fk_sensor) REFERENCES tb_sensores (id_sensor)
);


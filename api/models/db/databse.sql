DROP DATABASE IF EXISTS TasksList;

CREATE DATABASE TasksList;

USE TasksList;

CREATE TABLE Users (
    id INT NOT NULL auto_increment,
    email VARCHAR(30) NOT NULL,
    senha INT NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    email VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    prazo date,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) ENGINE=INNODB;
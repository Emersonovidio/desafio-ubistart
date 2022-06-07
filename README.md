# desafio-ubistart

#commit inicial do projeto
#criaçao pacote dependencias package- npm init
#instalacao de dependencias - npm install



# API de CRUD de tasks (Todo List)


Desenvolvimento de uma APIRest utilizando a arquitetura MSC!

Sistema de gerenciamento de tarefas, onde é possível criar, visualizar, deletar e atualizar tarefas tanto por usuario quanto pelo admministrador,utlizando o banco MySQL para registrar e gerenciar os dados.

------------------------------------------------------------------------------------------

Projeto desenvolvido em NodeJS utilizando Express, Autenticação (JWT) e banco de dados MySQL







Estrutura da API

Usuario
/Register - cria usuário - insere email + senha (recebe Token)
/Login - usuario faz login - insere token - redireciona /user
/User - usuario-tarefas:  inserir tarefa(Create), finalizar tarefa(Delete), atualizar,editar tarefa (Update), listar tarefas(Read)

Admin
/Login - admin faz login
/Admin - admin : listar todas tarefas, listar tarefas específicas(atrasadas) 






tecnologias :
Insomnia, Mysql Workbench,

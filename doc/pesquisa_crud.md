# Pesquisa sobre CRUD em PHP

## O que é CRUD?

CRUD é um conjunto de quatro operações básicas utilizadas em sistemas que trabalham com banco de dados. A sigla significa:

* **Create** → Criar dados
* **Read** → Ler/Consultar dados
* **Update** → Atualizar dados
* **Delete** → Excluir dados

Essas operações são fundamentais para qualquer sistema de gerenciamento, pois permitem cadastrar, visualizar, editar e remover informações armazenadas no banco de dados.

No PHP, o CRUD geralmente é desenvolvido utilizando integração com bancos de dados como MySQL através de tecnologias como **PDO** ou **MySQLi**.

---

# Operações do CRUD em PHP

## 1. Create (Criar)

A operação **Create** é responsável por inserir novas informações no banco de dados.

### Exemplo em PHP:

$sql = "INSERT INTO trens (nome, velocidade) VALUES (?, ?)";

### Aplicação no Projeto Ferroviário

No sistema de gerenciamento ferroviário, o Create será utilizado para:

* Cadastrar novos trens
* Registrar estações
* Adicionar rotas ferroviárias
* Inserir horários de viagens
* Registrar sensores e dispositivos

---

## 2. Read (Ler/Consultar)

A operação **Read** permite consultar e visualizar informações armazenadas no banco de dados.

### Exemplo em PHP:

$sql = "SELECT * FROM trens";

### Aplicação no Projeto Ferroviário

No projeto, o Read será utilizado para:

* Visualizar os trens cadastrados
* Consultar horários e itinerários
* Monitorar rotas
* Exibir informações das estações
* Mostrar dados recebidos pelos sensores

---

## 3. Update (Atualizar)

A operação **Update** serve para modificar informações existentes no banco de dados.

### Exemplo em PHP:

$sql = "UPDATE trens SET velocidade = ? WHERE id = ?";

### Aplicação no Projeto Ferroviário

No sistema ferroviário, o Update poderá ser usado para:

* Atualizar horários dos trens
* Alterar informações das estações
* Modificar dados de sensores
* Atualizar status das rotas
* Corrigir informações cadastradas

---

## 4. Delete (Excluir)

A operação **Delete** remove informações do banco de dados.

### Exemplo em PHP:

$sql = "DELETE FROM trens WHERE id = ?";

### Aplicação no Projeto Ferroviário

No projeto, o Delete será utilizado para:

* Remover trens desativados
* Excluir rotas antigas
* Apagar registros incorretos
* Remover sensores inutilizados
* Excluir horários cancelados

---

# Importância do CRUD no Projeto

O CRUD será essencial para o funcionamento do Sistema de Gerenciamento Ferroviário, pois permitirá o controle completo das informações do sistema.

Com ele, será possível:

* Gerenciar os dados de forma organizada
* Facilitar o monitoramento ferroviário
* Manter as informações atualizadas
* Garantir maior controle operacional
* Melhorar a administração das rotas e estações

Além disso, o uso do CRUD em PHP ajudará no aprendizado prático de integração entre:

* Front-end
* Back-end
* Banco de dados

---

# Conclusão

O CRUD é uma estrutura fundamental no desenvolvimento de sistemas web. Utilizando PHP e banco de dados, ele permite criar aplicações completas capazes de cadastrar, consultar, atualizar e remover informações.

No contexto do Sistema de Gerenciamento Ferroviário, o CRUD será utilizado para controlar trens, rotas, estações, sensores e horários, tornando o sistema mais eficiente, organizado e funcional.

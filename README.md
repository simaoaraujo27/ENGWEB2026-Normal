# ENGWEB2026-Normal

Resolução do exame de época normal da Unidade Curricular de Engenharia Web (3º ano LEI).

**Data:** 25 de Maio de 2026  
**Aluno:** Simão Pedro da Silva Araújo
**Número de Aluno:** A106855

---

## 1. Persistência de Dados e Setup

### Exercício 1 (API de Jogos de Tabuleiro)

- **Base de Dados:** MongoDB.
- **Setup:** A base de dados chama-se `jogostabuleiro` e a coleção principal `jogos`.
- **Importação:** Os dados são importados automaticamente a partir do ficheiro `jogos.json` usando o serviço `mongo-seed` no Docker Compose.
- **Modelo:** Implementado com Mongoose, garantindo que o campo `id` é único.

### Exercício 2 (Lista de Leituras)

- **Base de Dados:** MongoDB.
- **Setup:** A base de dados chama-se `livrosdb` e a coleção `livros`.
- **Importação:** Dados iniciais carregados a partir de `livros.json` (6 registos exemplificativos).
- **Modelo:** Derivado da análise da interface Vue.js, incluindo campos para título, autor, páginas, género e estado de leitura.

---

## 2. Instruções de Execução

As aplicações foram contentorizadas com Docker para garantir que o ambiente de execução é idêntico ao de desenvolvimento.

### Exercício 1

1. `cd ex1`
2. `docker-compose up --build -d`
3. Aceder à API em `http://localhost:17000`
4. Documentação Swagger em `http://localhost:17000/api-docs`

### Exercício 2

1. `cd ex2`
2. `docker-compose up --build -d`
3. Aceder à interface web em `http://localhost:19021`
4. A API de suporte corre em `http://localhost:19020`

---

## 3. Respostas Textuais (Exercício 1.2)

As queries MongoDB para responder às questões de warm-up encontram-se no ficheiro:
`ex1/queries.txt`

---

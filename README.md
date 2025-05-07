# 📝 Gerenciador de Tarefas (CLI)

Este é um projeto simples de terminal feito com **Node.js**, que permite criar, listar, editar, remover, concluir e buscar tarefas. É uma aplicação de linha de comando, ideal para fins de aprendizado ou organização pessoal.

---

## 🚀 Funcionalidades

- ✅ Criar tarefas com nome e ID único (4 dígitos)
- 📋 Listar todas as tarefas salvas
- ✏️ Editar o nome de uma tarefa existente
- 🗑️ Remover tarefas pelo ID
- ✔️ Marcar tarefas como concluídas
- 🔍 Buscar tarefas por palavra-chave
- 🧹 Terminal limpo (`console.clear()`) a cada operação
- 🔙 Retorno ao menu após cada ação
- 💾 Dados salvos em arquivo local `usuarios.json`

---

## 📁 Estrutura do Projeto
├── app.js # Interface principal de usuário (terminal)
├── tarefas.js # Funções de CRUD e lógica de negócio
└── usuarios.json # "Banco de dados" local com as tarefas

---

## 🛠️ Como executar

### Pré-requisitos:
- Node.js instalado (versão 16+ recomendada)

### Instalação e execução:

```bash
git clone https://github.com/seu-usuario/gerenciador-tarefas-cli.git
cd gerenciador-tarefas-cli
node app.js

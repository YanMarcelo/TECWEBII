Claro! Aqui está o conteúdo completo do arquivo `README.md` para o seu projeto de Gerenciador de Tarefas em Node.js, incorporando todas as informações discutidas anteriormente:

---

```markdown
# 📝 Gerenciador de Tarefas (CLI)

Este é um projeto de linha de comando desenvolvido com **Node.js**, que permite aos usuários criar, listar, editar, remover, concluir e buscar tarefas. Os dados são armazenados localmente em um arquivo JSON, proporcionando uma experiência simples e eficiente para gerenciamento de tarefas via terminal.

---

## 🚀 Funcionalidades

- **Criar Tarefa**: Adiciona uma nova tarefa com nome e ID único de 4 dígitos.
- **Listar Tarefas**: Exibe todas as tarefas cadastradas com detalhes.
- **Editar Tarefa**: Permite alterar o nome de uma tarefa existente.
- **Remover Tarefa**: Exclui uma tarefa pelo ID e atualiza a lista.
- **Concluir Tarefa**: Marca uma tarefa como concluída.
- **Buscar Tarefas**: Filtra tarefas por palavra-chave no nome.
- **Interface Limpa**: O terminal é limpo a cada ação para melhor legibilidade.
- **Navegação Intuitiva**: Após cada ação, o usuário retorna ao menu principal.

---

## 📁 Estrutura do Projeto

```

.
├── app.js            # Interface principal de usuário (terminal)
├── tarefas.js        # Funções de CRUD e lógica de negócio
└── usuarios.json     # "Banco de dados" local com as tarefas

````

---

## 🛠️ Como Executar

### Pré-requisitos:

- [Node.js](https://nodejs.org/) instalado (versão 16 ou superior recomendada)

### Instalação e Execução:

```bash
git clone https://github.com/seu-usuario/gerenciador-tarefas-cli.git
cd gerenciador-tarefas-cli
node app.js
````

---

## 📚 Uso

Ao iniciar o aplicativo, será exibido um menu com as opções disponíveis. Selecione a opção desejada digitando o número correspondente e siga as instruções no terminal.

**Exemplo:**

```
1 - Criar Tarefa
-> Digite o nome da tarefa: Estudar Node.js
-> Digite o ID da tarefa (4 dígitos): 1234
✅ Tarefa criada com sucesso!
```

---

## 🧪 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/): Ambiente de execução JavaScript
* [readline](https://nodejs.org/api/readline.html): Interface para leitura de dados via terminal
* [fs (File System)](https://nodejs.org/api/fs.html): Manipulação de arquivos do sistema

---

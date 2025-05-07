const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const {
  criarTarefa,
  listarTarefas,
  editarTarefas,
  removerTarefa,
  concluirTarefa,
  buscarTarefas
} = require('./tarefas');

const rl = readline.createInterface({ input, output });

function exibirMenu() {
  console.clear();
  console.log(`
╔══════════════════════════════════╗
║         GERENCIADOR DE TAREFAS   ║
╠══════════════════════════════════╣
║  1 - ➕ Criar tarefa             ║
║  2 - 📋 Listar tarefas           ║
║  3 - ✏️  Editar tarefa            ║
║  4 - 🗑️  Remover tarefa           ║
║  5 - ✅ Concluir tarefa          ║
║  6 - 🔍 Buscar tarefas           ║
║  0 - 🚪 Sair                     ║
╚══════════════════════════════════╝
  `);
}

async function obterId(mensagem) {
  const resposta = await rl.question(mensagem);
  const id = Number(resposta);
  if (isNaN(id)) {
    console.log('❌ ID inválido!');
    return null;
  }
  return id;
}

async function main() {
  while (true) {
    exibirMenu();
    const opcao = await rl.question('👉 Escolha uma opção: ');

    switch (opcao) {
      case '1': {
        console.clear();
        const nome = await rl.question('📝 Digite o nome da tarefa: ');
        const id = await obterId('🔢 Digite o ID da tarefa (4 dígitos): ');
        if (id !== null) criarTarefa(nome, id);
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
        break;
      }

      case '2':
        console.clear();
        listarTarefas();
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
        break;

      case '3': {
        console.clear();
        const id = await obterId('🔢 Digite o ID da tarefa: ');
        if (id === null) break;
        const novoNome = await rl.question('✏️  Novo nome da tarefa: ');
        editarTarefas(id, novoNome);
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
        break;
      }

      case '4': {
        console.clear();
        listarTarefas();
        const id = await obterId('🗑️  Digite o ID da tarefa: ');
        if (id !== null) {
          removerTarefa(id);
        }
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
        break;
      }

      case '5': {
        console.clear();
        listarTarefas();
        const id = await obterId('✅ Digite o ID da tarefa: ');
        if (id !== null) concluirTarefa(id);
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
        break;
      }

      case '6': {
        console.clear();
        const termo = await rl.question('🔍 Digite uma palavra-chave para buscar: ');
        buscarTarefas(termo);
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
        break;
      }

      case '0':
        console.clear();
        console.log('\n👋 Saindo... Até logo!');
        rl.close();
        process.exit(0);

      default:
        console.clear();
        console.log('❌ Opção inválida. Tente novamente.');
        await rl.question('\n🔙 Pressione Enter para voltar ao menu...');
    }
  }
}

main();

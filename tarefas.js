const fs = require('fs');
const arquivo = 'usuarios.json';

function salvarTarefas(tarefas) {
  fs.writeFileSync(arquivo, JSON.stringify(tarefas, null, 2));
}

function lerTarefas() {
  if (!fs.existsSync(arquivo)) {
    salvarTarefas([]);
  }
  const conteudo = fs.readFileSync(arquivo, 'utf-8');
  return JSON.parse(conteudo);
}

function idValido(id) {
  if (typeof id !== 'number' || id < 1000 || id > 9999) {
    console.log('❌ O ID deve conter exatamente 4 dígitos numéricos.');
    return false;
  }
  return true;
}

function idExiste(id, tarefas) {
  const encontrado = tarefas.some(tarefa => tarefa.id == id);
  if (encontrado) {
    console.log('⚠️ Esse ID já está em uso. Escolha outro.');
    return true;
  }
  return false;
}

function tarefaExiste(tarefas) {
  if (tarefas.length === 0) {
    console.log('📭 Nenhuma tarefa cadastrada.');
    return false;
  }
  return true;
}

function criarTarefa(nome, id) {
  const tarefas = lerTarefas();

  if (!idValido(id)) return;
  if (idExiste(id, tarefas)) return;

  const agora = new Date().toLocaleString();

  const nova = {
    id,
    nome,
    status: 'Pendente',
    dataCriacao: agora,
    dataAtualizacao: agora
  };

  tarefas.push(nova);
  salvarTarefas(tarefas);

  console.log('✅ Tarefa criada com sucesso!');
}

function listarTarefas() {
  const tarefas = lerTarefas();

  if (!tarefaExiste(tarefas)) return;

  console.log('\n📋 Lista de Tarefas:\n');

  tarefas.forEach(tarefa => {
    console.log(`🆔 ID: ${tarefa.id}`);
    console.log(`📌 Nome: ${tarefa.nome}`);
    console.log(`📅 Criada em: ${tarefa.dataCriacao}`);
    console.log(`🛠️  Atualizada em: ${tarefa.dataAtualizacao}`);
    console.log(`📌 Status: ${tarefa.status === 'Concluído' ? '✅ Concluído' : '⌛ Pendente'}`);
    console.log('──────────────────────────────');
  });
}

function editarTarefas(id, novoNome) {
  const tarefas = lerTarefas();

  if (!tarefaExiste(tarefas)) return;

  const tarefa = tarefas.find(t => t.id == id);

  if (!tarefa) {
    console.log('❌ ID não encontrado.');
    return;
  }

  tarefa.nome = novoNome;
  tarefa.dataAtualizacao = new Date().toLocaleString();

  salvarTarefas(tarefas);
  console.log('✏️ Tarefa atualizada com sucesso!');
}

function removerTarefa(id) {
  const tarefas = lerTarefas();

  if (!tarefaExiste(tarefas)) return;

  const novaLista = tarefas.filter(t => t.id != id);

  if (novaLista.length === tarefas.length) {
    console.log('❌ ID não encontrado.');
    return;
  }

  salvarTarefas(novaLista);
  console.log('🗑️ Tarefa removida com sucesso!');
}

function concluirTarefa(id) {
  const tarefas = lerTarefas();

  if (!tarefaExiste(tarefas)) return;

  const tarefa = tarefas.find(t => t.id == id);

  if (!tarefa) {
    console.log('❌ ID não encontrado.');
    return;
  }

  tarefa.status = 'Concluído';
  tarefa.dataAtualizacao = new Date().toLocaleString();

  salvarTarefas(tarefas);
  console.log('✅ Tarefa marcada como concluída!');
}

function buscarTarefas(palavra) {
  const tarefas = lerTarefas();

  if (!tarefaExiste(tarefas)) return;

  const resultado = tarefas.filter(t =>
    t.nome.toLowerCase().includes(palavra.toLowerCase())
  );

  if (resultado.length === 0) {
    console.log('🔍 Nenhuma tarefa encontrada com essa palavra.');
    return;
  }

  console.log('\n🔎 Tarefas encontradas:\n');

  resultado.forEach(tarefa => {
    console.log(`🆔 ID: ${tarefa.id}`);
    console.log(`📌 Nome: ${tarefa.nome}`);
    console.log(`📅 Criada em: ${tarefa.dataCriacao}`);
    console.log(`🛠️  Atualizada em: ${tarefa.dataAtualizacao}`);
    console.log(`📌 Status: ${tarefa.status === 'Concluído' ? '✅ Concluído' : '⌛ Pendente'}`);
    console.log('──────────────────────────────');
  });
}

module.exports = {
  criarTarefa,
  listarTarefas,
  editarTarefas,
  removerTarefa,
  concluirTarefa,
  buscarTarefas
};

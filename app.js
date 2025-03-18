let amigos = []; // Lista de amigos

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo').value.trim(); // Pega o valor do input

    alert(nomeInput.length > 2 && !amigos.includes(nomeInput));
    if (nomeInput && !amigos.includes(nomeInput)) { // Verifica se o nome não está vazio e não está na lista
        amigos.push(nomeInput); // Adiciona o nome à lista de amigos
        atualizarListaAmigos(); // Atualiza a lista na tela
    }
    document.getElementById('amigo').value = ''; // Limpa o campo de input após adicionar
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // Seleciona o elemento da lista na tela
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(nome => { // Para cada nome na lista de amigos
        const li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = nome; // Adiciona o nome ao item
        listaAmigosElement.appendChild(li); // Adiciona o item à lista na tela
    });
}

// Função para sortear um nome aleatório
function nomeSorteadoFunc() {
    // if (amigos.length === 0) {
    //  console.log("Não há amigos na lista para sortear.");
    //  return null;
    // }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    return amigos[randomIndex];
}

// Função para realizar o sorteio e garantir que o usuário não se sorteie
function sortearAmigo() {
    //testa se existem mais que ou igual a 3 itens na lista
    if (amigos.length < 3) {
        alert("adicione mais amigos");
    } else {
        const sorteado = nomeSorteadoFunc(); //sorteia o nome
        document.getElementById('resultado').textContent = `O amigo sorteado é: ${sorteado}`;
    }
    const nomeUsuarioInput = document.getElementById('nomeUsuario').value.trim();

      if (!nomeUsuarioInput) {
       exibirMensagem("Por favor, digite seu nome antes de realizar o sorteio.");
      return;
     }

     const sorteado = nomeSorteadoFunc();
     if (sorteado) {
       document.getElementById('resultado').textContent = `O amigo sorteado é: ${sorteado}`;
     } else {
       document.getElementById('resultado').textContent = "Não foi possível realizar o sorteio.";
     }
}

// Função para exibir mensagens na tela (sem alert)
function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById('resultado');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.display = 'block'; // Exibe a mensagem
    setTimeout(() => {
        mensagemElement.style.display = 'none'; // Oculta a mensagem após 4 segundos
    }, 4000);
}

// Adiciona o evento de clique para o botão "Adicionar"
document.getElementById('adicionarButton').addEventListener('click', adicionarNomeParaSorteio);

// Adiciona o evento de clique para o botão "Sortear"
document.getElementById('sortearButton').addEventListener('click', sortearAmigo); {
};

// Atualiza a lista de amigos na tela
atualizarListaAmigos();

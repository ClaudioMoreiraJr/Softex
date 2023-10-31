const prompt= require('prompt-sync')()

function receberInformacoes(nomes = [],idades = [], coresFavoritas = []) {
    
    for (var i = 0; i < 2; i++) {
      var nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
      nomes.push(nome);
  
      var idade = parseInt(prompt("Digite a idade de " + nome + ":"));
      idades.push(idade);
  
      var corFavorita = prompt("Digite a cor favorita de " + nome + ":");
      coresFavoritas.push(corFavorita);
    }
  
    return {
      nomes: nomes,
      idades: idades,
      coresFavoritas: coresFavoritas
    };
  }
  
function imprimirInformacoes(nomes, idades, coresFavoritas) {
    console.log("Lista de Nomes:", nomes);
    console.log("Lista de Idades:", idades);
    console.log("Lista de Cores Favoritas:", coresFavoritas);
  }
  
  // Recebendo informações do usuário
  var informacoes = receberInformacoes();
  
  // Imprimindo informações originais
  console.log("Informações originais:");
  imprimirInformacoes(informacoes.nomes, informacoes.idades, informacoes.coresFavoritas);
  
  // Modificando uma cor e uma idade
  var indiceModificar = parseInt(prompt("Digite o índice da pessoa(de 0 a 9):"));
  if (indiceModificar >= 0 && indiceModificar < 10) {
    var novaIdade = parseInt(prompt("Digite a nova idade para " + informacoes.nomes[indiceModificar] + ":"));
    var novaCor = prompt("Digite a nova cor favorita para " + informacoes.nomes[indiceModificar] + ":");
    
    informacoes.idades[indiceModificar] = novaIdade;
    informacoes.coresFavoritas[indiceModificar] = novaCor;
  } else {
    console.log("Índice inválido");
  }
  
  // Imprimindo informações após as modificações
  console.log("Informações após modificações:");
  imprimirInformacoes(informacoes.nomes, informacoes.idades, informacoes.coresFavoritas);
  
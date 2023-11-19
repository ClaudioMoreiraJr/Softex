// Interface que define o contrato para os sanduíches
class Sanduiche {
    cost() {
      return 0;
    }
  
    descricao() {
      return 'Sanduíche';
    }
  }
  
  // Implementação concreta do sanduíche de frango assado
  class FrangoAssado extends Sanduiche {
    cost() {
      return 4.50;
    }
  
    descricao() {
      return 'Sanduíche de Frango Assado';
    }
  }
  
  // Decorator para adicionar ingredientes extras
  class IngredienteAdicional extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    cost() {
      return this.sanduiche.cost();
    }
  
    descricao() {
      return this.sanduiche.descricao();
    }
  }
  
  // Implementações concretas dos ingredientes adicionais
  class Pepperoni extends IngredienteAdicional {
    cost() {
      return this.sanduiche.cost() + 0.99;
    }
  
    descricao() {
      return `${this.sanduiche.descricao()}, Pepperoni`;
    }
  }
  
  class QueijoMussarelaRalado extends IngredienteAdicional {
    cost() {
      return this.sanduiche.cost() + 2.00;
    }
  
    descricao() {
      return `${this.sanduiche.descricao()}, Queijo Mussarela Ralado`;
    }
  }
  
  // Programa principal
  const sanduicheFrangoAssado = new FrangoAssado();
  const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(sanduicheFrangoAssado));
  
  console.log(`${sanduicheDecorado.descricao()} custa $${sanduicheDecorado.cost().toFixed(2)}.`);
  
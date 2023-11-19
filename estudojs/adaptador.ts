// Interface para Galinha
interface Galinha {
    cacarejar(): void;
    bicar(): void;
  }
  
  // Classe concreta que implementa a interface Galinha
  class GalinhaComum implements Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    bicar() {
      console.log("Bicando no chão.");
    }
  }
  
  // Interface para Pato
  interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  // Classe concreta que implementa a interface Pato
  class PatoSelvagem implements Pato {
    grasnar() {
      console.log("Quack!");
    }
  
    voar() {
      console.log("Voando no céu.");
    }
  }
  
  // Adaptador que permite que um Pato seja usado como uma Galinha
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar();
    }
  
    bicar() {
      console.log("Bicando no chão.");
    }
  }
  
  // Demonstração do uso do AdaptadorPato
  class AdaptadorPatoDemo {
    static main() {
      // Criando uma instância de Pato
      const patoSelvagem = new PatoSelvagem();
  
      // Usando o AdaptadorPato para adaptar o Pato como uma Galinha
      const adaptadorPato = new AdaptadorPato(patoSelvagem);
  
      // Chamando métodos da interface Galinha no objeto do tipo Pato usando o adaptador
      adaptadorPato.cacarejar();
      adaptadorPato.bicar();
    }
  }
  
  // Executando a demonstração
  AdaptadorPatoDemo.main();
  
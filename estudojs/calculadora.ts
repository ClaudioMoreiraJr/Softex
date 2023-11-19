// Interface Strategy
interface OperacaoStrategy {
    execute(num1: number, num2: number): number;
  }
  
  // Classes concretas que implementam a interface Strategy
  class SomaStrategy implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  class SubtracaoStrategy implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  class MultiplicacaoStrategy implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculadora {
    private operacaoStrategy!: OperacaoStrategy;
  
    setOperacaoStrategy(operacaoStrategy: OperacaoStrategy): void {
      this.operacaoStrategy = operacaoStrategy;
    }
  
    executarOperacao(num1: number, num2: number): void {
      if (this.operacaoStrategy) {
        const resultado = this.operacaoStrategy.execute(num1, num2);
        console.log(`Resultado: ${resultado}`);
      } else {
        console.log("Por favor, defina uma operação antes de calcular.");
      }
    }
  }
  
  // Programa principal
  const calculadora = new Calculadora();
  
  // Recebendo input do usuário
  const num1 = parseFloat(prompt("Digite o primeiro número:")) || 0;
  const num2 = parseFloat(prompt("Digite o segundo número:")) || 0;
  
  const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");
  
  // Definindo a Strategy com base na operação informada
  switch (operacao) {
    case "+":
      calculadora.setOperacaoStrategy(new SomaStrategy());
      break;
    case "-":
      calculadora.setOperacaoStrategy(new SubtracaoStrategy());
      break;
    case "*":
      calculadora.setOperacaoStrategy(new MultiplicacaoStrategy());
      break;
    default:
      console.log("Operação inválida.");
  }
  
  // Executando a operação
  calculadora.executarOperacao(num1, num2);
  
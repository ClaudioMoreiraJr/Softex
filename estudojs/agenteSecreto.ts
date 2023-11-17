class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string;
  
    private constructor() {
      // Defina a senha da Base Secreta durante a criação da instância
      this.senhaBaseSecreta = "senhaSuperSecreta";
    }
  
    public static obterInstancia(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senhaInserida: string): void {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado. Senha incorreta!");
      }
    }
  }
  
  // Programa principal
  const sistemaSeguranca = SistemaSeguranca.obterInstancia();
  
  // Tentativa de acesso com senha correta
  sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta");
  
  // Tentativa de acesso com senha incorreta
  sistemaSeguranca.acessarBaseSecreta("senhaIncorreta");
  
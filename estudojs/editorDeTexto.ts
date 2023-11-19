// Classe base do Observer
class Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notifyObservers(event: string): void {
      this.observers.forEach((observer) => observer.update(event));
    }
  }
  
  // Interface Observer
  interface Observer {
    update(event: string): void;
  }
  
  // Classe concreta que representa o Editor
  class Editor extends Subject {
    private content: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.content.splice(lineNumber, 0, text);
      this.notifyObservers('insert');
    }
  
    removeLine(lineNumber: number): void {
      this.content.splice(lineNumber, 1);
      this.notifyObservers('remove');
    }
  
    getContent(): string[] {
      return [...this.content];
    }
  }
  
  // Subclasse da classe Editor chamada TextEditor
  class TextEditor extends Editor {
    // Método para receber linhas de texto do usuário
    receiveTextFromUser(): void {
      let lineNumber = 0;
      let userInput: string;
  
      console.log('Digite o texto para cada linha. Digite "EOF" para encerrar.');
  
      do {
        userInput = prompt(`Linha ${lineNumber + 1}: `) || '';
        if (userInput.toUpperCase() !== 'EOF') {
          this.insertLine(lineNumber, userInput);
          lineNumber++;
        }
      } while (userInput.toUpperCase() !== 'EOF');
  
      // Disparando o evento "save" para salvar o conteúdo no arquivo configurado
      this.notifyObservers('save');
    }
  
    // Método para imprimir todo o conteúdo na tela
    printContent(): void {
      console.log('\nConteúdo do arquivo:');
      this.getContent().forEach((line, index) => {
        console.log(`Linha ${index + 1}: ${line}`);
      });
    }
  }
  
  // Classe que representa um observador específico para o evento "save"
  class SaveObserver implements Observer {
    update(event: string): void {
      if (event === 'save') {
        console.log('Salvando o conteúdo no arquivo...');
        // Lógica para salvar o conteúdo no arquivo configurado
      }
    }
  }
  
  // Classe que representa um observador específico para o evento "insert"
  class InsertObserver implements Observer {
    update(event: string): void {
      if (event === 'insert') {
        console.log('Linha inserida. Atualizando visualização...');
      }
    }
  }
  
  // Demonstração do uso do TextEditor
  const textEditor = new TextEditor();
  
  // Adicionando observadores
  const saveObserver = new SaveObserver();
  const insertObserver = new InsertObserver();
  
  textEditor.addObserver(saveObserver);
  textEditor.addObserver(insertObserver);
  
  // Disparando o evento "open"
  textEditor.notifyObservers('open');
  
  // Recebendo linhas de texto do usuário
  textEditor.receiveTextFromUser();
  
  // Imprimindo todo o conteúdo na tela
  textEditor.printContent();
  
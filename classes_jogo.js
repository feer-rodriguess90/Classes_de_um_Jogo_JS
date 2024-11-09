// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método tipo de ataque baseado no tipo do herói
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "fez um ataque desconhecido";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo 
  const heroi1 = new Heroi("Merlin", 150, "mago");
  const heroi2 = new Heroi("Conan", 35, "guerreiro");
  
  heroi1.atacar(); // Chamar metodo atacar - Saída: O mago atacou usando magia
  heroi2.atacar(); // Chamar metodo atacar - Saída: O guerreiro atacou usando espada
  
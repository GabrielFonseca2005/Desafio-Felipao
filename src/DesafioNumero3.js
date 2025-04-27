// Classe que representa um herói de aventura
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Define o tipo de ataque com base no tipo do herói
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
          ataque = "atacou de uma forma desconhecida";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso:
  const heroi1 = new Heroi("Arthas", 30, "guerreiro");
  const heroi2 = new Heroi("Merlin", 150, "mago");
  const heroi3 = new Heroi("Bruce", 40, "monge");
  const heroi4 = new Heroi("Hanzo", 25, "ninja");
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  
class heroi{
  constructor(nomeHeroi, idadeheroi, tipoHeroi){
    this.nomeHeroi = nomeHeroi;
    this.idadeheroi = idadeheroi;
    this.tipoHeroi = tipoHeroi;
  }
  falaNome(){
    console.log(`O nome do herói é ${this.nomeHeroi}, sua idade é ${this.idadeheroi}, e sua classe é ${this.tipoHeroi}`);
  }
  atacar(){
    const tipo = this.tipoHeroi.toString().toLowerCase();
    //const tipoLow = tipo.toLowerCase();
    const tiposAtack = ["Magia", "Espada", "Artes Marciais", "Shuriken"];

    switch (tipo) {
      case "mago":
        console.log(`o ${tipo} atacou usando ${tiposAtack[0]}`)
        break;
      case "guerreiro":
        console.log(`o ${tipo} atacou usando ${tiposAtack[1]}`)
        break;
      case "monge":
        console.log(`o ${tipo} atacou usando ${tiposAtack[2]}`)
        break;
      case "ninja":
        console.log(`o ${tipo} atacou usando ${tiposAtack[3]}`)
        break;
      default:
        console.log(`Você identificou o tipo errado de herói!`)
        break;
    }

  }

}

let heroiThiago = new heroi("Thiago", 38, "monge");
heroiThiago.falaNome();
heroiThiago.atacar();
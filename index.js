class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido, cuidado!";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


let mago = new Heroi("Gandalf", 150, "mago");
let guerreiro = new Heroi("Arthur", 35, "guerreiro");
let monge = new Heroi("Liu Kang", 40, "monge");
let ninja = new Heroi("Kakashi", 30, "ninja");


mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

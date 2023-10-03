class hero {
  constructor(job, attack, age) {
    this.job = job;
    this.attack = attack;
    this.age = age;
  }

  atacar() {
    console.log(`O ${this.job} atacou usando ${this.attack}.`);
    console.log(`Seu nível é ${this.age}.`);
  }
}

let mago = new hero('Mago', 'magia', '17');
let guerreiro = new hero('Guerreiro', 'espada', '21');
let monge = new hero('Monge', 'artes marciais', '27');
let ninja = new hero('Ninja', 'shuriken', '33');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

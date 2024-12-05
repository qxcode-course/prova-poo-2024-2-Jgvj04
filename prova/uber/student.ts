function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
//function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};
class Pessoa{
    private nome: string;
    private dinheiro: number; 
    constructor(name: string, money: number){
        this.nome = name;
        this.dinheiro = money; 
    }
    getNome(){
      return this.nome;
    }
    getDinheiro(){
      return this.dinheiro; 
    }
    setDinheiro(value: number){
      if (value >= 0){
        this.dinheiro = value; 
      }
      console.log(`e existe dinheiro negativo?`); 
    }
    toString(): string {
      return `Passageiro: ${this.nome}, Grana: ${this.dinheiro}`;
    }
}
class Moto {
  private passageiro: Pessoa | null;
  private motorista: Pessoa | null;
  private custo: number;

  constructor(){
    this.passageiro = null;
    this.motorista = null;
    this.custo = 0; 
  }
  setDriver(motorista: Pessoa){
    if (this.motorista == null){
      this.motorista = motorista;
    }
  }
  setPassenger(passageiro: Pessoa){
    if (this.motorista != null && this.passageiro == null){
      this.passageiro = passageiro;
    }
  }
  drive(distancia: number){
    if (this.motorista != null && this.passageiro != null){
      this.custo = distancia; 
    }
  }
  leavePassenger(){
    if (this.passageiro != null && this.motorista != null && this.custo > this.passageiro.getDinheiro()){
      this.custo -= this.passageiro.getDinheiro();
      this.custo -= this.motorista.getDinheiro();
    }
    if (this.passageiro != null && this.custo <= this.passageiro.getDinheiro()){
      this.custo -= this.passageiro.getDinheiro();
    }
  }
  show(){
    `Cost: ${this.custo}, Driver: ${this.motorista}, Passenger: ${this.passageiro}`;
  }
}
class Adapter {
    setDriver(name: string, money: number): void {
    }

    setPassenger(name: string, money: number): void {
    }

    drive(distance: number): void {
    }

    leavePassenger(): void {
    }

    show(): void {
    }
}

function main(): void {
    let adapter: Adapter = new Adapter();
    while (true) {
        write("$", "");
        const line = input();
        const args = line.split(" ");
        write(line);

        if      (args[0] === "end"      ) { break;                                   }
        else if (args[0] === "setDriver") { adapter.setDriver(args[1], +args[2]);    }
        else if (args[0] === "setPass"  ) { adapter.setPassenger(args[1], +args[2]); }
        else if (args[0] === "drive"    ) { adapter.drive(+args[1]);                 }
        else if (args[0] === "leavePass") { adapter.leavePassenger();                }
        else if (args[0] === "show"     ) { adapter.show();                          }
        else                              { console.log("fail: command not found");  }
    }
}

main();

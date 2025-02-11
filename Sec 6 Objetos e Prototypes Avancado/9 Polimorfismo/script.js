function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Impossível completar saque, Saldo insuficiente seu saldo é: " + this.saldo);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Agência: ${this.agencia} Conta: ${this.conta} Saldo: ${this.saldo}`);
};

function ContaCo(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCo.prototype = Object.create(Conta.prototype);
ContaCo.prototype.constructor = ContaCo;

ContaCo.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log("Impossível completar saque, Saldo insuficiente");
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaPo(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPo.prototype = Object.create(Conta.prototype);
ContaPo.prototype.constructor = ContaCo;

ContaPo.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log("Impossível completar saque, Saldo insuficiente");
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

let a = new Conta(10, 50, 10);
a.depositar(100);
a.sacar(111);

let b = new ContaCo(10, 50, 10, 200);
b.depositar(100);
b.sacar(111);

let c = new ContaPo(10, 50, 10);
c.depositar(100);
c.sacar(111);

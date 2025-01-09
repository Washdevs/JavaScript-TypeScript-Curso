// Factory Function contém o return que pode retornar executando um método que mostra os parametros que são passados na função Pai

function createCar(model, color) {
  return {
    model,
    color,
    start() {
      console.log(`${model} Novo temos na cor ${color}`);
    },
    stop() {
      console.log(`${model} Usado temos na cor ${color}`);
    },
  };
}

const car1 = createCar("Tesla Model S", "Vermelho");
const car2 = createCar("BMW X5", "Preto");

car1.start();
car2.stop();

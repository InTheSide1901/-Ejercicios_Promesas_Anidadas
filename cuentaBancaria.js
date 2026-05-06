require('colors')
let saldo = 1001;

function validarSaldo(saldoCantidad) {
    return new Promise((resolve, reject) => {
        console.log("Validando saldo...")
        setTimeout(() => {            
            if (saldo >= saldoCantidad) {
                resolve("Saldo suficiente".green)
            } else {
                reject("Saldo insuficiente".red)
            }
        },5000)
    })
}

function realizarTransferencia(saldoCantidad) {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      saldo -= saldoCantidad;
      resolve(`Transferencia realizada. Saldo restante: ${saldo}`.yellow);
    }, 10000);
  });
}

function transferir(monto) {
  validarSaldo(monto)
    .then((response) => {
      console.log(response);
      return realizarTransferencia(monto);
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error:".red, error);
    })
    .finally(() => {
      console.log("Operación finalizada!");
    });
}

transferir(500);
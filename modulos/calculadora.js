const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite a operação (+, -, *, /): ', (op) => {
      let result;
      switch (op) {
        case '+':
          result = Number(num1) + Number(num2);
          break;
        case '-':
          result = Number(num1) - Number(num2);
          break;
        case '*':
          result = Number(num1) * Number(num2);
          break;
        case '/':
          result = Number(num1) / Number(num2);
          break;
        default:
          console.log('Operação inválida');
          rl.close();
          return;
      }
      console.log(`O resultado da operação é: ${result}`);
      rl.close();
    });
  });
});

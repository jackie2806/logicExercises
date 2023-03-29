//description
/* Encuentra la lógica de las siguientes operaciones y números:

5 + 4 = 19
8 + 2 = 610
10 + 8 = 218
12 + 9 = 321
18 + 2 = 1620
21 + 5 = 1626 */

function solution(num1, num2) {
    let numberOne = num1 - num2;
    let numberTwo = num1 + num2;
    let stringOfNumbers = `${numberOne}${numberTwo}`
    return Number(stringOfNumbers)
  }
console.log(solution(5,4))
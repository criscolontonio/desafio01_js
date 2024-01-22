let numberOne = prompt(`Digite o primeiro número`)
let numberTwuo = prompt (`Digite o segundo número`)

numberOne = Number(numberOne)
numberTwuo = Number(numberTwuo)

let sum = numberOne + numberTwuo
let sub = numberOne - numberTwuo
let mult = numberOne * numberTwuo
let div = (numberOne / numberTwuo).toFixed(2)
let rest = numberOne % numberTwuo

alert(` A soma dos número digitados é: ${sum}` )
alert(` A subtraçao dos número digitados é: ${sub}` )
alert(` A multiplicação dos número digitados é: ${mult}` )
alert(` A divisão dos número digitados é: ${div}`)
alert(` O resto da divisão dos número digitados é: ${rest}` )

if (sum % 2 == 0){
  alert( `A soma dos números digitados resulta em um número par`)
}
else {
  alert( `A soma dos números digitados resulta em um número impar`)
}

if ( numberOne == numberTwuo){
  alert( ` Os números digitados são iguais`)
}
else{
  alert( `Os números digitados são diferentes`)
}



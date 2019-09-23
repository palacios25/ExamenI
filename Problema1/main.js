function Amigos(){
   let limite = document.querySelector("#limite").value;
   let numeros = [];
   let div1 = 0;
   let div2 = 0;
   let num1 = limite;
   let num2 = limite;

   for(let n = 0; n <= limite; n++){
    if (numeros[n] = true){
        for ( let m = 1; m <= limite; m++){
            numeros[n*m] = false;
        }
    }
}

console.log(num1);
console.log(num2);
    for(let i = 1; i <= num1/2; i++){
        if (num1 % i == 0){
            div1++;
        }
    }

    for(let i = 1; i <= num2/2; i++){
        if (num2 % i == 0){
            div2++;
        }
    }

    if (div1 == num2 && div2 == num1){
        return console.log("Son numeros amigos")
    } else {
        return console.log("Estos numeros no son amigos")
    }
}


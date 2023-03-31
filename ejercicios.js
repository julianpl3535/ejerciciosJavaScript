const obtenerMenor = (numeros) => {
    let menor = Infinity;
    for (let i = 0; i<numeros.length; i++){
        if(numeros[i]<= menor){
            menor = numeros[i];
        }        
    }
    return (menor);
}
console.log(obtenerMenor([10,20,30,24,3,50,200]))


const sumaNumeros = (numero) =>{
    let final = "";
    for  (let i = 0; i<numero.length; i ++){
        final = parseInt(final + numero[1])
    }
    return final;
}

console.log(sumaNumeros([2,2,2,2]));

const contieneIndice = (numero, numeros) =>{
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] === numero){
            return true;
        }
    }
    return false;
}
console.log(contieneIndice(34,[4,5,6,7,34]))//true
console.log(contieneIndice(1,[4,5,6,7,34]))//false


const separar = (string) => {
    const arrayEmoji = string.sort().reverse();
    return arrayEmoji    
}
console.log(separar(['2','6','2','6','6','2']));


const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo');
    const sam = personajes.indexOf('Sam');
    return sam -frodo === 1 || sam-frodo === -1
}

console.log(estarJuntos(['Sam', 'Frodo','Legolas']));//true
console.log(estarJuntos(['Aragon', 'Frodo','Sam']));//true
console.log(estarJuntos(['Sam', 'Orco', 'Frodo']));//false


const obtenerIndice = (valor, array) =>{
    return array.indexOf(valor);   
}
console.log(obtenerIndice(5,[5,7,12,34,54,2,12]))//se cumple
console.log(obtenerIndice(83,[5,7,12,34,83,2,12]))//no se cumple



const repetir = (valor, cantidad) =>{
    let print = [];
    for(let i = 0; i<cantidad; i++){
        print.push(valor);            
    }
    return (print);
}   
console.log(repetir('lovelace', 3))
console.log(repetir('a', 5))
console.log(repetir('html', 0))
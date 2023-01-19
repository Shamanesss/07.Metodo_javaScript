
let cadena = "Vamos a medir la longitud de esta frase";
console.log(cadena.length);

let grupoB = ["Edurne","Gorka","Maria","Xabier"];
console.log(grupoB.length);

let nodecir = "Vale";
console.log(nodecir.repeat(4));

let lugar = "Este es el lugar donde esta la palabra";
console.log(lugar.indexOf("esta") ) ;  
console.log(lugar.indexOf("palabro") ) ;
console.log(lugar.indexOf("e", 24));



let buscar = "Los virus informaticos son una leyenda urbana";
console.log(buscar.includes('virus'));
console.log(buscar.includes('LEYENDA'));
console.log(buscar.includes('virus', 11));

let arrBuscar = ['virus', 'gusanos','troyanos','spam'];
console.log(arrBuscar.includes('spam'));
console.log(arrBuscar.includes('cookies'));

let caracter ="Cuidado con el perro"
console.log(caracter.charAt(15));
console.log(caracter.charAt(16));
console.log(caracter.charAt(17));
console.log(caracter.charAt(18));
console.log(caracter.charAt(19));

console.log(caracter[0])
console.log(caracter[1])
console.log(caracter[2])
console.log(caracter[3])
console.log(caracter[4])
console.log(caracter[5])
console.log(caracter[6])

let espacios = "         Aqui hay muchos espacios     ";
console.log(espacios.trim());
console.log(espacios.trimEnd());
console.log(espacios.trimStart());



let cambiar = "JavaScript"
console.log(cambiar.replace("ava","-"))


let frase = "Los ordenadores dominaran el MUNDO"
console.log(frase.toLowerCase(frase))


console.log(frase.toUpperCase(frase))

let trozo ="Tener cuidado con los programadores que llevan destornillador."
console.log(trozo.slice(6, 35))
console.log(trozo.slice(-15))
console.log(trozo.slice(47))

let texto = "Internet es lo unico que se cae y nadie se rie";

console.log(texto.substr(5));    
console.log(texto.substr(15,5)); 

let text = "Internet es lo unico que se cae y nadie se rie";
console.log(text.substring(5));
console.log(text.substring(5,15));
console.log(text.substring(15,5))
console.log(text.substring(15,20));






    
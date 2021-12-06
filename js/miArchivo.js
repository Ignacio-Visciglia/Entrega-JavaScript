/*
 * @challenge: INCORPORAR ARRAYS
 * 
 * @version: v1.2.0
 * @author: Juan Ignacio Visciglia
 * @fecha: 06/12/2021
 *
 * History:
 *  - v1.2.0 – Primera entrega
 */

//Declaracion clase Release
class Release{
    constructor(name, year){
        this.name = name; 
        this.year = year;
    }
}

//Creacion de objetos para el Array
let release1 = new Release("ADE & FRIENDS 2021 compilation", 2021);
let release2 = new Release("D9 x D9SA ESSENTIALS 2021", 2021);
let release3 = new Release("D9SA012 - Nemesis", 2021);
let release4 = new Release("D9SA011 - Perséfone", 2021);
let release5 = new Release("D9SA008 - Zeus", 2021);
let release6 = new Release("D9SA007 - Eros", 2021);
let release7 = new Release("D9SA005 - Afrodita", 2020);
let release8 = new Release("D9SA005 - Artemisa", 2020);

//Creacion del Array de Releases
let releasesArray = [release1, release2, release3, release4, release5, release6, release7, release8];

console.log(releasesArray);

//Uso de metodos
console.log(releasesArray.length);

let spliceArray = releasesArray.splice(2, 3);
console.log(spliceArray);

console.log(releasesArray);
let sliceArray = releasesArray.slice(2,4);
console.log(sliceArray);

//Clase Usuario

/* class User{
    constructor(username, password, email, nationality, sex){
        this.username = username;
        this.password = password;
        this.email = email;
        this.nationality = nationality;
        this.sex = sex;
    }
    changeEmail(){
        let newMail = prompt(`Ingrese la nueva casilla de email:`);
        if(newMail !== ""){
            this.email = newMail;
            console.log(`Usted ha modificado su casilla email`);
            alert(`Usted ha modificado su casilla email`);
        }else{
            console.log(`Vuelva a intentar`);
            alert(`Vuelva a intentar`);
        }
    }
}

const user1 = new User(`Juan`, `contrasenia`, `juanignacio@mail.com`, `Argentino`, `Masculino`);
console.log(user1);
user1.changeEmail();
console.log(user1.email); */


//Calculo pagos en cuotas sobre un monto determinado

/* function montoEnCuotas(){
    let valor = parseInt(prompt('Ingrese el valor a abonar en numeros'));
    let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas en las que quiere realizar el pago. Solo puede realizarlo en hasta 3 cuotas. Las mismas no tienen interes'));
    if((typeof valor === 'number' && typeof cuotas ==='number') && (cuotas >= 1 && cuotas <=3)){
        let valorCuota = valor / cuotas;
        console.log('El valor de $' + valor + ' se abona en ' + cuotas + ' cuotas de $' + valorCuota);
        alert('El valor de $' + valor + ' se abona en ' + cuotas + ' cuotas de $' + valorCuota);
    }else{
        console.log('Error. No ingreso valores y/o cuotas expresados en numeros. Recuerde que puede pagar en hasta 3 cuotas sin interes.')
        alert('Error. No ingreso valores y/o cuotas expresados en numeros. Recuerde que puede pagar en hasta 3 cuotas sin interes.');
    }    
}

montoEnCuotas(); */




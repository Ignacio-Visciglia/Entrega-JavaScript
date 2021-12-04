/*
 * @challenge: INCORPORAR OBJETOS
 * 
 * @version: v1.1.0
 * @author: Juan Ignacio Visciglia
 * @fecha: 04/12/2021
 *
 * History:
 *  - v1.1.0 – Primera entrega
 */

//Clase Usuario

class User{
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
console.log(user1.email);


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




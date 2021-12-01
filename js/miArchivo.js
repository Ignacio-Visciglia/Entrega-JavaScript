/*
 * @challenge: SIMULADOR INTERACTIVO
 * 
 * @version: v1.0.0
 * @author: Juan Ignacio Visciglia
 * @fecha: 01/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

//Calculo pagos en cuotas sobre un monto determinado

function montoEnCuotas(){
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

montoEnCuotas();


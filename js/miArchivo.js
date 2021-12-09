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


//Declaracion de arreglo de productos
let products = [];

//Clase Producto
class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Clase Usuario
class User{
    constructor(username, password, email, nationality, sex){
        this.username = username;
        this.password = password;
        this.email = email;
        this.nationality = nationality;
        this.sex = sex;
    }
    changePassword(){
        let newPassword = prompt(`Ingrese la nueva contrasenia:`);
        if(newPassword !== ""){
            this.password = newPassword;
            console.log(`Usted ha modificado su password`);
            alert(`Usted ha modificado su password`);
        }else{
            console.log(`Vuelva a intentar`);
            alert(`Vuelva a intentar`);
        }
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
    changeNationality(){
        let newNationality = prompt(`Ingrese su nacionalidad:`);
        if(newNationality !== ""){
            this.nationality = newNationality;
            console.log(`Usted ha modificado su nacionalidad`);
            alert(`Usted ha modificado su nacionalidad`);
        }else{
            console.log(`Vuelva a intentar`);
            alert(`Vuelva a intentar`);
        }
    }
    changeSex(){
        let newSex = prompt(`Ingrese su sexo:`);
        if(newSex !== ""){
            this.sex = newSex;
            console.log(`Usted ha modificado su sexo`);
            alert(`Usted ha modificado su sexo`);
        }else{
            console.log(`Vuelva a intentar`);
            alert(`Vuelva a intentar`);
        }
    }
}


let user = "";
//Funcion que solicita datos para creacion de objeto user
const usuario = () => {
    let username = prompt(`Ingrese su nombre de usuario`);
    let password = prompt(`Ingrese su contrasenia`);
    let email = prompt(`Ingrese su email`);
    let nationality = prompt(`Ingrese su nacionalidad`);
    let sex = prompt(`Ingrese su sex`);
    user = new User(username, password, email, nationality, sex);
    console.log(`Gracias por registrarse. Disfrute su experiencia, ${user.username}`);
    console.log(user);
    alert(`Gracias por registrarse. Disfrute su experiencia, ${user.username}`);
}

//Llamado de la funcion para crear una instancia de la clase User
usuario();

user = user.changePassword();


//Pusheo objetos al Array products
products.push(new Product(1, "Stainless Tumbler", 1200));
products.push(new Product(2, "Cloth Face Mask", 500));
products.push(new Product(3, "Women's Boyfriend Tee", 1500));
products.push(new Product(4, "Kids Premium Tee", 1500));
products.push(new Product(5, "Women's Comfort Tee", 1500));
products.push(new Product(6, "Leggings", 2500));
products.push(new Product(7, "Premium Pullover Hoodie", 3500));
products.push(new Product(8, "Classic Tank Top", 1000));
products.push(new Product(9, "Stainless Water Bottle", 1900));
products.push(new Product(10, "Mug", 450));
products.push(new Product(11, "Stainless Tumbler", 1100));
products.push(new Product(12, "Neck Gaiter", 750));
products.push(new Product(13, "Women's Comfort Tee", 1500));
products.push(new Product(14, "Premium Tank Top", 900));
products.push(new Product(15, "Classic Tee", 1500));
products.push(new Product(16, "Kids Classic Pullover Hoodie", 3500));
products.push(new Product(17, "Classic Pullover Hoodie", 3500));
products.push(new Product(18, "Women's Premium Hoodie", 3500));

//Ciclo for para recorrer el array
for (const producto of products) {
    console.log(`producto ${producto.name}, precio $${producto.price}`);
}

//Salida por consola del array
console.log(products);


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

//Llamado de la funcion para calcular monto en cuotas
montoEnCuotas();
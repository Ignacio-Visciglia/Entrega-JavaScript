/*
 * @challenge: ORDENAR UN ARRAY DE OBJETOS
 * 
 * @version: v1.0.0
 * @author: Juan Ignacio Visciglia
 * @fecha: 09/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
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

//Funcion de ordenamiento
products.sort((a,b) => {
    return a.price - b.price;
});
console.log(products);
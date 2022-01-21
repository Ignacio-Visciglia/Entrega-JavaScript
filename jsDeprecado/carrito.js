//Clase Producto
class Product{
    constructor(description, price){
        this.description = description;
        this.price = price;
    }
}

const addNewCarritoList = () =>{ 

    tableCarrito.innerHTML = "";
    let tr;
    
    carrito.forEach((element,i) => {
        tr = document.createElement('tr');
        tr.setAttribute("id", i);

        tr.innerHTML = `<td>
                            Hola
                        </td>
                        <td>${element.description}</td>
                        <td>${element.price}</td>
                        <td>
                            <img class="pointer" src="../images/delete.png" onclick="deleteClick(${i})">
                        </td>`;

        tableCarrito.appendChild(tr);
    });
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if(carrito.length > 0) addNewCarritoList();
const addItem = () =>{

    let description = descripcion.innerHTML;
    let price = precio.innerHTML;
    let newProduct = new Product(description, price);
    carrito.push(newProduct);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    addNewCarritoList();
}

// Eventos
btn.onclick= (e) =>{
    e.preventDefault();
    addItem();
}

deleteClick = (index) =>{
    carrito.splice(index, 1);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    addNewCarritoList();
}
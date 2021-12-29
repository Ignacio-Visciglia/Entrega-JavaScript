

const resetInputs = ()=>{
    descripcion.value = "";
    precio.value ="";
}

const addItem = () =>{

    let description = descripcion.value;
    let price = precio.value;
    let newProduct = new Product(description, price);
    carrito.push(newProduct);
    localStorage.setItem("carrito",JSON.stringify(carrito));

    addNewCarritoList();
    resetInputs();
}

// Eventos

btnAddItem.onclick = (e) =>{
    e.preventDefault();
    addItem();
}

deleteClick = (index) =>{
    carrito.splice(index, 1);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    addNewCarritoList();
}
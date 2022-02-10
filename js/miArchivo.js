/**
 * @challenge: Entrega final curso JS CoderHouse
 * 
 * @version: v1.0.0
 * @author: Juan Ignacio Visciglia
 * @fecha: 09/02/2022
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

$(function(){

//Product class
    class Product{
        constructor(obj){
            this.id = obj.id;
            this.img = obj.img;
            this.name = obj.name;
            this.price = obj.price;
        }
    }

    const URL = `http://localhost:3000/products`;

//Get Method
    $.get(URL, function(response, status){
        if(status === `success`){
            localStorage.setItem(`catalogue`, JSON.stringify(response));
        }
    })


    const storage = JSON.parse(localStorage.getItem(`catalogue`));
    let products = [];

    for (const object of storage) {
        products.push(new Product(object));
    }
    
    const cart = [];
    let total = 0;

//E-commerce cards
    for (const product of products) {
        $(`.merch`).append(`<li class="bg-dark">
                            <figure>
                                <img src=${product.img} alt="${product.name}">
                            </figure>
                            <figcaption>
                                <p id="descripcion">${product.name}</p>
                                <p id="precio">ARS$${product.price}</p>
                                <button type="button" id="btnAddItem${product.id}" class="btn btn-primary"><p>ADD TO CART</p><i class="fas fa-cart-plus"></i></button>
                            </figcaption>
                        </li>`);
        //Add card to Cart                
        $(`#btnAddItem${product.id}`).on(`click`, function(){
            cart.push(product);
            console.log(cart);
            total += product.price;
            
            $('#cart').append(`<div class="row shoppingCartPlant mt-3 text-center">
                                    <div class="col-3" id="productImg">
                                        <img src=${product.img} class="imgModal"/>
                                    </div>
                                    <div class="col-3">
                                        <h6>${product.name}</h6>
                                    </div>
                                    <div class="col-3">
                                        <p class="product-price shoppingCartPlantPrice">${product.price}</p>
                                    </div>
                                    <div class="col-3">
                                        <button class="btn btn-danger" id="remove-product-btn" data-bs-name="${product.name}">
                                            x
                                        </button>
                                    </div>
                                </div>`);
            $(`.precioTotal`).html(total);
        });
    }

//Delete Cart
    $(`#deleteCartItems`).on(`click`, function(){ 
        $('#cart').html(``);
        $(`.precioTotal`).html(`0`);
    })

//Buy Cart
    $(`#buyCart`).on(`click`, function(){ 
        alert(`Thanks for buying Droid9 South American Products`);
    })


//Submit Sign Up    

    const urlPost = 'http://localhost:3000/users';

    $('#submit').click(function(e){
        e.preventDefault();
        let userName = $('#username').val();
        let password = $('#password').val();
        let email = $('#email').val();

        let body= {
                    userName: userName,
                    password: password,
                    email: email,
                  }
        if(userName === `` || password === `` || email === ``){
            $('#result').html(`Fill the complete form and try again please`);
            $('#result').hide(4000,function(){
                $('#result').html(``);
                $('#result').show(`fast`);
            });
        }else {
            //Post Method
            $.post(urlPost,body,function(response,status){
                if(status==='success'){
                    $('#result').html('Signed Up');
                    $('#result').hide(10000000000);
                }
            })
        }     
        
    })

});
$(function () {

  const urlGet = "http://localhost:3000/products";
 
  $.get(urlGet, function (response, status) {
    let html =``;
    if(status === "success"){
      let allData = response;
      for (const data of allData) {
          html += `<!-- ${data.id} -->
                  <li class="bg-dark">
                    <figure>
                      <img src=${data.img} alt="${data.name}">
                    </figure>
                    <figcaption>
                      <p id="descripcion">${data.name}</p>
                      <p id="precio">ARS$${data.price}</p>
                      <button type="submit" id="btnAddItem${data.id}" class="btn btn-primary"><p>ADD TO CART</p><i class="fas fa-cart-plus"></i></button>
                    </figcaption>
                  </li>`
      }
      $(`.merch`).html(html);
    }
  });


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
      

        $.post(urlPost,body,function(response,status){
            if(status==='success'){
                $('#result').html('Signed Up')
            }
        })
    })

});
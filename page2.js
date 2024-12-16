let products;
function init(){
  $.ajaxSetup({async: false});

  let link = "https://9144757e-782f-48ea-9d33-c577f06f9a52-00-jl6bimddarqh.riker.replit.dev";
  let route= "/products"
  products = $.getJSON(link+route).responseJSON;

  generateCards(products);


}

function generateCards(product){

  let mainpanel = document.getElementById("centerpanel");
  mainpanel.innerHTML = "";
  let text ="";
  let content ="";

  for(let i=0; i< products.length; i++){
    let product = products[i];

    text  = `<div class="card" >`
    text += `<img src="images/${product.productId}.png"> <br></br><h3> Product ID : ${product.productId}</h3>`;
    text += `  ${product.title}   <br></br>  Price: $${product.price} <br></br> Quantity left: ${product.quantity} <br></br> </div> `;
    text += `<hr>`;
    text += `</div>`;
    content = ` <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active c-item">
            <img src="images/${product.productId}.png" class="d-block w-100 c-img" alt="Slide 1">
          </div>
          <div class="carousel-item c-item">
            <img src="images/${product.productId}a.png" class="d-block w-100 c-img" alt="Slide 2">
          </div>
          <div class="carousel-item c-item">
            <img src="images/${product.productId}b.png" alt="Slide 3">
          </div>
          <div class="carousel-item c-item">
            <img src="images/${product.productId}c.png" class="d-block w-100 c-img" alt="Slide 4">
          </div>
        </div>
      </div>
      `;
    content += `<div class="card">`
    content += `<div> ${product.description} </div>`;
    content += `</div>`;
    
    let card = new Modal(text,content);
    card.render("centerpanel");
  }
}

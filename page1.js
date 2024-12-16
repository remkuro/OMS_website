 let orders;
function init(){
  $.ajaxSetup({async: false});

  let link = "https://9144757e-782f-48ea-9d33-c577f06f9a52-00-jl6bimddarqh.riker.replit.dev";
  let route= "/ordersinfo"
  orders = $.getJSON(link+route).responseJSON;

  generateCards(orders);

}

// i out order..., so everytime it filters, it just calls the same link with no adjuustment to it since its not retrieving the info from the argument
function generateCards(data){

  let output = document.getElementById("output");
  output.innerHTML = "";
  let text = "";
  let content ="";

  for(let i=0; i< data.length; i++){
    let order = data[i]; // remember the orders are in a database of arrays, and arrays use [x] for their index/specific position
    text += `<div class="card fade-in tag fitted" >`
    text += `<h3> Order ID : ${order.orderId}</h3>`;
    text += `<div>&nbsp;&nbsp;&nbsp;&nbsp;${order.userId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $${order.grandTotal} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${order.status} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${order.type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${order.payment_method} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${order.firstName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${order.middleName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  ${order.lastName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${order.email}</div> `;
    text += `<hr>`;
    text += `</div>`;
    content  = `<div class="card" >`
    content += `<div> Subtotal : ${order.subTotal} Item Discount : ${order.itemDiscount}  Tax : ${order.tax} Shipping Costs : ${order.shipping} Promo : ${order.promo} Discount : ${order.discount}</div>`;
    content += `</div>`;
  }
  let card = new Modal(text,content);
  card.render("output");
}

//can filter almost anything lolz
function filter(){
  let filterInput = document.getElementById("filterInput").value;
   let filterType = document.getElementById("filterType").value;
  
  let orderList = []; //create a list of songs searched for


  if(filterType == "status"){
  for(let i=0; i< orders.length; i++){
    let order = orders[i];//get each sog
    //make sure the list is no
    if( order.status == filterInput ) {
          //add to the new list
          orderList.push(order);
       }
     }
   }

  if(filterType == "type"){
    for(let i=0; i< orders.length; i++){
      let order = orders[i];//get each sog
      //make sure the list is no
      if( order.type == filterInput ) {
            //add to the new list
            orderList.push(order);
         }
       }
     }

  if(filterType == "name"){
    for(let i=0; i< orders.length; i++){
      let order = orders[i];//get each sog
      //make sure the list is no
      if( order.firstName == filterInput ) {
            //add to the new list
            orderList.push(order);
         }
       }
     }
  console.log(`number found ${orderList.length}`)
  generateCards(orderList);

}


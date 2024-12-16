// Generating charts for index.html
let orders;
window.onload = function(){
$.ajaxSetup({async: false});
let link = "https://9144757e-782f-48ea-9d33-c577f06f9a52-00-jl6bimddarqh.riker.replit.dev";
let route= "/ordersinfo"
data = $.getJSON(link+route).responseJSON;

let purchase = 0, pend_purchase = 0, refund = 0, pend_refund = 0;

  //Construct the chart data using the full agency name.  Hint: Go to the data source.
for(i = 0; i < data.length; i++){
    info = data[i];
   if(info.type == "Purchase" && info.status == "Completed"){
      purchase++;
    }else if(info.type == "Purchase" && info.status == "Pending"){
      pend_purchase++;
    }else if(info.type == "Refund" && info.status == "Completed"){
      refund++;
    }else if(info.type == "Refund" && info.status == "Pending"){
      pend_refund++;
    }
  }


  
    chartData = [
      ["PURCHASES",purchase],
      ["PENDING PURCHASES",pend_purchase],
      ["REFUNDS", refund],
      ["PENDING REFUNDS", pend_refund],
    ]
     
      displayChart(chartData,"output","pie");


  
  route= "/products"
  data = $.getJSON(link+route).responseJSON;
  let highStock = 0, lowStock = 0, inStock = 0;

    //Construct the chart data using the full agency name.  Hint: Go to the data source.
  for(i = 0; i < data.length; i++){
      info = data[i];
     if(info.quantity < 30){
        lowStock++;
      }else if(info.quantity >= 30 && info.quantity <= 80){
        inStock++;
      }else if(info.quantity > 80){
        highStock++;
      }
    }

      chartData2 = [
        ["HIGH STOCK: 80>",highStock],
        ["IN STOCK: 30-80",inStock],
        ["LOW STOCK: <30", lowStock],
      ]

      displayChart2(chartData2,"output2","bar");

  let content = `
       <div class="container center"style="max-width:2140px">
                      <div class="card2">    
                       <p>Customer-centric experiences require more intelligence than ever before to engage customers, deliver the right product, through the right channel, with the speed and convenience that consumers expect. As your business grows, you also need to adapt and scale even faster to keep pace, all while delivering a seamless customer experience from engagement to delivery and support. Smart Inventory transforms order management (OMS) with an augmentative, microservices based approach which delivers the rapid time-to-market, scale and performance businesses need from inventory availability, order, orchestration, and fulfillment to help you gain a competitive edge.</p>
                      </div>
                         <img src="https://business.kaiserpermanente.org/wp-content/uploads/2023/02/1223377524_Getty_RF_HiRes-copy_1880x600.jpg" style=" width:177px; 
    height:178px;
    box-shadow:2px 2px 5px rgba(0, 0, 0, 1);
    margin: 5px 5px 5px 10px;">

                    </div>


                 `;
      let content2 = `
       <div class="container center"style="max-width:2140px">
                      <div class="card2">    
                       <p>SmartInventory’s order management redefines how commerce happens – delivering meaningful customer experiences and removing lengthy upgrades and technical obstacles that get in the way of business transformation. Our augmentative, domain-centric microservices deliver performance and flexibility, allowing businesses to start with what they need today knowing that they can add capabilities tomorrow. By processing thousands of transactions per second, SmartInventory delivers the response time, scale and performance so volume no longer becomes a concern. Furthermore, SmartInventory’s 40+ microservices can operate independently or seamlessly integrate to provide a modular architecture that can deliver results in weeks not years for a faster time to value. </p>
                      </div>
                      <img src="https://medialibrarycdn.blueyonder.com/-/media/images/blue%20yonder/master/solutions/order-management-luminate-commerce.gif?h=427&iar=0&w=640&rev=-1" width:177px; 
                      height:178px;
                      box-shadow:2px 2px 5px rgba(0, 0, 0, 1);
                      margin: 5px 5px 5px 10px;">
                    </div>


                 `;
      let content3 = `
       <div class="container center"style="max-width:2140px;background-color: rgb(245, 245, 245);">
                      <div class="card2">    
                      <h3>Complete Real-time Inventory Visibility Across Your Network</h3>
                       <p>
  Provide real-time product availability (ATP), from enterprise in-stock/out-of-stock messaging to location and proximity-based availability. Powered by the latest artificial intelligence (AI)/machine learning (ML), real-time reservations and segmentation, businesses can maximize inventory exposure and deliver accurate promises without risk of disappointing customers or overselling. </p>
                      </div>
                       <img src="https://medialibrarycdn.blueyonder.com/-/media/images/blue%20yonder/master/solutions/order-management-inventory.gif?h=427&iar=0&w=640&rev=-1" width:177px; 
                      height:178px;
                      box-shadow:2px 2px 5px rgba(0, 0, 0, 1);
                      margin: 5px 5px 5px 10px;">
                    </div>


                 `;
        let content4 = `
       <div class="container center"style="max-width:2140px;background-color: rgb(245, 245, 245);">
                      <div class="card2">   
                      <h3>Optimize Delivery Dates, Last-Mile Options and Fulfillment Decisions</h3>
                       <p>Increase conversion rates and improve customer satisfaction by presenting customers with personalized, market-based options for when and how they can receive their products (order by, get by, get it today) while also improving cost to serve from promise to post-order decisioning with ML and fulfillment powered optimization algorithms. </p>

                      </div>
                      <img src="https://medialibrarycdn.blueyonder.com/-/media/images/blue%20yonder/master/solutions/order-management-commits.gif?h=427&iar=0&w=640&rev=-1" width:177px; 
                      height:178px;
                      box-shadow:2px 2px 5px rgba(0, 0, 0, 1);
                      margin: 5px 5px 5px 10px;">
                    </div>


                 `;
    let collapsible = new Collapsible("Order Management", content);

    let collapsible2 = new Collapsible("SmartInventory's Order Management", content2);

    let collapsible3 = new Collapsible("Inventory Availability", content3);  let collapsible4 = new Collapsible("Commits", content4);
        collapsible.render("op1")
        collapsible2.render("op2")
        collapsible3.render("op3")
        collapsible4.render("op4")

  }



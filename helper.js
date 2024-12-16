//JS FUNCTIONS FOR ALL WEBPAGES

function get(id){
  return document.getElementById(id);
}


// dropdown menu; checks to see if the select option is within the dataset and then pushes the json key if it isn't, this loop repeats until it satisifies the conditions of the list being filled
function fillDropDown(key){
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let field of list){
      build += `<option>${field}</option>`;
  }
  return build;
}

//  Needed for init function below; displayChart( ) accepts the data, an id of the container where to display the chart, and the type of chart to display in the container.
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}

function displayChart2( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}

//https://c3js.org/samples/timeseries.html


//scroll function credit for information/tutorial: https://blog.hubspot.com/website/css-fade-in
// basic explanation: the code detects the top and bottom of the view source, then checks each tag section element for whether the tag is inside the view category or  visible on the screen/to the viewer....if the section element is in view, it assigns it the class visible.... If the section element is not in view, it removes the visible class from this section element allowing for it to show up when the viewer arrives at the visibility
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});



// function init(){
//   $.ajaxSetup({async: false});
//   let link = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
//   //Get the data using the link
//   data = $.getJSON(link).responseJSON;
//   console.log(data);

// }


document.addEventListener("DOMContentLoaded", function(event) {
  //document.getElementById("banner").style.backgroundImage = "url('pics/pic4.jpg')";
  
  var image_ind = 0;
  setInterval(swapImage, 10000);

  function swapImage() {
  	index = image_ind + 1;
  	document.getElementById("banner").style.backgroundImage = "url('pics/pic"+index+".jpg')";
  	image_ind = (image_ind+1)%5;
  }
  function spool_val(update_func, element, up_or_down)
  {
  	
  }
  function interpolate_gradient(element, gradient_val, on_or_off) 
  {
  	if (on_or_off) // if our user has hovered over the element
  	{
  		element.style.background = "rgb(5,5,5)"
  		element.style.background = "linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(29,29,29,1) 50%, rgba(59,59,59,1) 100%)"
  	}
  	else
  	{
  		element.style.background = "rgb(5,5,5)"
  		//element.style.background = "linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(29,29,29,1) 78%, rgba(59,59,59,1) 100%)"
  	}
  }
  function bind_gradient_function(element, gradient_val)
  {
  	element.addEventListener("mouseover", function() {interpolate_gradient(element, gradient_val, true)})
  	element.addEventListener("mouseout", function() {interpolate_gradient(element, gradient_val, false)})
  }
  button_list = document.getElementsByClassName("bar-button")
  var gradient_val = []
  for (var i = 0; i < button_list.length; i++)
  {
  	gradient_val.push(0)
  	bind_gradient_function(button_list[i], i, true)
  }
  // function slow_gradient()
  // {
  // 	console.log("called")
  // }

});
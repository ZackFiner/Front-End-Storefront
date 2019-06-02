document.addEventListener("DOMContentLoaded", function(event) {
  //document.getElementById("banner").style.backgroundImage = "url('pics/pic4.jpg')";
  
  var gradient_val = []
  var image_ind = 0;
  setInterval(swapImage, 10000);

  function swapImage() {
  	index = image_ind + 1;
  	document.getElementById("banner").style.backgroundImage = "url('pics/pic"+index+".jpg')";
  	image_ind = (image_ind+1)%5;
  }
  function spool_val(update_func, element, grad_ind)
  {
    target = gradient_val[grad_ind];
    if (target.spool_timer == -1)
    {
      target.spool_timer = setInterval(function(){spool_val(update_func, element, grad_ind); update_func();}, 10); // we want to set up our timer if we haven't already
    }
    target.current_gradient += 5*target.current_dir;
    if (gradient_val[grad_ind].current_gradient > 100)
    {
      target.current_gradient = 100;
      clearInterval(target.spool_timer)
      target.spool_timer = -1;
    }
    if (target.current_gradient < 0)
    {
      target.current_gradient = 0;
      clearInterval(target.spool_timer)
      target.spool_timer = -1;
    }
  }
  function interpolate_gradient(element, grad_ind, on_or_off) 
  {
  	if (on_or_off) // if our user has hovered over the element
  	{
      gradient_val[grad_ind].current_dir = 1
  	}
  	else
  	{
      gradient_val[grad_ind].current_dir = -1
  	}
    if (gradient_val[grad_ind].spool_timer == -1)
    {
      spool_val(function(){
        interpolation = gradient_val[grad_ind].current_gradient
        element.style.background = "rgb(5,5,5)";
        let fade1 = 100-interpolation
        let fade2 = interpolation/2
        let fade3 = 100
        element.style.background = "linear-gradient(180deg, rgba(5,5,5,1) "+fade1+"%, rgba(29,29,29,1) "+fade2+"%, rgba(59,59,59,1) "+fade3+"%)";
      }, element, grad_ind);
    }
  }
  function bind_gradient_function(element, grad_ind)
  {
  	element.addEventListener("mouseover", function() {interpolate_gradient(element, grad_ind, true)});
  	element.addEventListener("mouseout", function() {interpolate_gradient(element, grad_ind, false)});
  }
  button_list = document.getElementsByClassName("bar-button")
  for (var i = 0; i < button_list.length; i++)
  {
  	gradient_val.push({spool_timer: -1, current_gradient: 0, current_dir: 0});
  	bind_gradient_function(button_list[i], i);
  }
  console.log(gradient_val)
  // function slow_gradient()
  // {
  // 	console.log("called")
  // }

});
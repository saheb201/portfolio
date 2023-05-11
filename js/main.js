var icons = document.getElementById("icons");
icons.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icons.src = "images/moon.png";
    }else{
        icons.src ="images/sun.png";
    }
}

/*stecky menu  */
$(".js--about-section").waypoint(
    function(direction)
      {if (direction == "down"){
         $("nav").addClass("sticky");
       
        } else{
            $("nav").removeClass(".ticky");
    }
});

won=`correct`;
lost=`oops! sorry try again`;

function secretcode(){

 let gamecode=prompt(`what is the secretcode?`);
  

  if(gamecode==257){
   alert(`${won}`);
  } else if(gamecode!=257){
   alert(`${lost}`);
  }

  if(gamecode==257){
  alert(`the door is open go to the next room`);
  }else if(gamecode!=257){
  alert(`the door is still close`)
  }



  if(gamecode==257){
    document.getElementById("article").style.visibility= "visible";
    
  }
 }

  
  function info(){
    var x = document.getElementById("infotext");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
    }
  }
  



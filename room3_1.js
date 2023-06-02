
alert(`Ooh!`)

let s = 60;
let m = 9;
let time = setInterval(function(){timer()},1000);
function timer (){
  s--;
  if(s==-1){
    m--;
    s=59
    if(m==-1){
      m=0
      s=0
      clearInterval(time)
      alert(`the time is out`)
    }
  }
  document.getElementById(`m`).innerHTML = m;
  document.getElementById(`s`).innerHTML = s;

}



won=`correct`;
lost=`oops! sorry try again`;

function check(){

 let gamecode=prompt(`what is the secretcode?`);
  

  if(gamecode==`𝕬𝕽𝕬𝕭`){
   alert(`${won}`);
  } else if(gamecode!=`𝕬𝕽𝕬𝕭`){
   alert(`${lost}`);
  }

  if(gamecode==`𝕬𝕽𝕬𝕭`){
  alert(`the door is open go to the next room`);
  }else if(gamecode!=`𝕬𝕽𝕬𝕭`){
  alert(`the door is still close`)
  }



  if(gamecode==`𝕬𝕽𝕬𝕭`){
    
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



function help(){
  var x = document.getElementById("helptext");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

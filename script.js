function button1Function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
  ctx.fillStyle = "#00FF00";

  ctx.fillRect(0, 0, 10, 10);

  ctx.fillRect(20, 20, 10, 10);
}
function button2Function(){
  var canvas= document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillstyle="#00FF00";
  for (let index=0;index=140;index=+20){
  ctxfillRect(index,index,10,10)
  }
  for (let index=140;index=0;index=-20){
   let z=140;
   ctxfillRect(index,z-index,10,10)
}


  
  
}
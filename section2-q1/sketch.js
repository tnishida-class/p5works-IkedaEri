// 小手調べ
function setup(){
  createCanvas(200, 200);
  noFill();
   for(let i = 0; i < 10; i++){
    if(i > 4){
     stroke(255, 0, 0);
   }
    else{
     stroke(0, 0, 255);
   }
  ellipse(100, 100, (1 + i) * 10)
    // BLANK[1]
  }
}

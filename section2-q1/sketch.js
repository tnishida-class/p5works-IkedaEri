// 小手調べ
function setup(){
  createCanvas(200, 200);
//  noFill();
   for(let i = 10; i > 0; i--){
    if(i > 5){
     stroke(255, 0, 0);
   }
    else{
     stroke(0, 0, 255);
   }
  ellipse(100, 100, i * 10)
    // BLANK[1]
  }
}

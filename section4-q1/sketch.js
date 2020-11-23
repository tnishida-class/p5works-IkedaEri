// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
}

function draw(){
  background(252, 226, 196);
  count = (count + 1.5) % cycle;
  if(count > 0 && count < cycle / 2){size = 40 + count;}
  if(count >= cycle / 2 && count < cycle){size = cycle + 40 - count;}
  //BLANK[1]
 noStroke();
 fill(233, 84, 107);
 ellipse(width / 2, height / 2, size);
}

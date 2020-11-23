// 最終課題を制作しよう
let snowballs, get, presentboxes;
let score = 0;
let decolate = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  snowballs = [];
  presentboxes = [];
}

function draw(){
  background(160, 192, 255);
  text("雪玉獲得数 " + score + "  プレゼント獲得数 " + decolate, windowWidth - windowWidth / 4, windowHeight * 3 / 4);
  for(let i = 0; i < snowballs.length; i++){
    let sb = snowballs[i];
    noStroke();
    ellipse(sb.x, sb.y, sb.size);
    sb.x += sb.vx;
    sb.y += sb.vy;
    }
 if(random(0, 100) < 8){
    const sb = {
     x : random(0, windowWidth),
     y : 0,
     size : random(20, 30),
     vx : random(-0.15, 0.15),
     vy : 2
     }
     snowballs.push(sb);
  }
   snowballs = snowballs.filter(isInTheWindow);

  for(let j = 0; j < presentboxes.length; j++){
   let pb = presentboxes[j];
   presentbox(pb.x, pb.y);
   pb.x += pb.vx;
   pb.y += pb.vy;
   }
  if(random(0, 100) < 0.3){
      const pb = {
       x : random(0, windowWidth),
       y : 0,
       vx : 0,
       vy : 5
       }
       presentboxes.push(pb);
    }
     presentboxes = presentboxes.filter(isInTheWindow);

     if(score > 15 && score < 30){
      push();
      stroke(51);
      circle(windowWidth / 2, windowHeight - 75, 150);
      fill('red');
      textSize(20);
      text("OK", windowWidth - windowWidth / 4 , windowHeight * 5 / 6);
      pop();
     }
     else if (score >= 30 && score < 50){
       push();
       stroke(51);
       circle(windowWidth / 2, windowHeight - 125, 250);
       fill('red');
       textSize(20);
       text("Good !", windowWidth - windowWidth / 4 , windowHeight * 5 / 6);
       pop();
     }
     else if(score >= 60){
        if(decolate > 7){
         push();
          snowmanB(windowWidth / 2, windowHeight - 325);
          fill('red');
          textSize(30);
          text("Excellent ★", windowWidth - windowWidth / 4 , windowHeight * 5 / 6);
          textSize(25);
          text("Thank you for playing !", windowWidth / 5, windowHeight - 360)
          pop();
        }
        else{
       push();
       snowmanA(windowWidth / 2, windowHeight - 325);
       fill('red');
       textSize(25);
       text("Great !!", windowWidth - windowWidth / 4 , windowHeight * 5 / 6);
       pop();
     }
    }
  }

function mouseClicked(){
 const n = snowballs.length;
 snowballs = snowballs.filter(snowfarFromMouse);
 let sum1 = n - snowballs.length;
 score += sum1;

 const m = presentboxes.length;
 presentboxes = presentboxes.filter(boxfarFromMouse);
 let sum2 = m - presentboxes.length;
 decolate += sum2;
}

function snowfarFromMouse(sb){
  return dist(sb.x, sb.y, mouseX, mouseY) > 35;
}

function boxfarFromMouse(pb){
  return dist(pb.x, pb.y, mouseX, mouseY) > 55;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function isInTheWindow(sb){
  return sb.x >= 0 && sb.x <= width && sb.y >= 0 && sb.y <= height;
}

function presentbox(prx, pry){
 push();
  noStroke();
  fill('red');
  rect(prx - 25, pry - 25, 50, 50);
  fill(77, 181, 106);
  rect(prx - 5, pry - 25, 10, 50);
  rect(prx - 25, pry - 5, 50, 10);
  triangle(prx - 10, pry - 45, prx, pry - 48, prx, pry - 25);
  triangle(prx + 4, pry - 48, prx + 20, pry - 46, prx, pry - 25);
 pop();
}

function snowmanA(mx, my){
  push();
  stroke(51);
  circle(mx, my + 200, 250);
  circle(mx, my, 150);
  strokeWeight(10);
  point(mx - 20, my - 5);
  point(mx + 20, my - 5);
  pop();
}

function snowmanB(mx, my){
  push();
  stroke(51);
  circle(mx, my + 200, 250);
  circle(mx, my, 150);
  strokeWeight(10);
  point(mx - 20, my - 5);
  point(mx + 20, my - 5);
  strokeWeight(5);
  arc(mx, my, 70, 70, PI / 4, PI * 3 / 4);
  strokeWeight(20);
  stroke(116, 116, 112);
  point(mx, my + 200);
  point(mx, my + 170);
  point(mx, my + 230);
  noFill();
  stroke(5, 150, 255);
  line(mx - 37, my - 75, mx + 38, my - 75);
  noStroke();
  fill(5, 150, 255);
  triangle(mx - 35, my - 75, mx + 10, my - 150, mx + 35, my - 75);
  rect(mx - 70, my + 65, 140, 40, 20);
  fill(255, 239, 32);
  star(mx + 10, my - 155, 15, -20);
  pop();
}

function star(cx, cy, r, angle){
  noStroke();
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

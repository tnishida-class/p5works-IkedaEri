// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", '#fae', 12, 70, 70, 'rgba(0,255,0, 0.25)');
}

function balloon(t, tc, ts, bx, by, bc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  push();
  fill(bc);
  noStroke();
  rect(bx, by, w + 20, h + 15, 15);
  fill(bc);
  triangle(bx + w * 0.7, by + h + 15, bx + w * 0.8, by + h + 15, bx + w * 0.77, by + h + 25);
  fill(tc);
  textSize(ts);
  text(t, p + bx, h + by);
  pop();
}

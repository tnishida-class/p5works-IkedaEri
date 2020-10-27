// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background('rgb(0, 69, 181)');
  angleMode(DEGREES);
  for(let i = 0; i < 12; i++){
    let theta = 360 * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    noStroke();
    fill(255, 241, 0);
    star(x, y, 10);
  }
}

function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = 360 * i * 2 / 5 - 90;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}

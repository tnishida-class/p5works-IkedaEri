// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
  linechart(scores);
}

function linechart(scores){
  scaleY(10);
  fill(0);
  for(let i = 0; i < scores.length; i++){
  const dx = width * i / scores.length;
  const dy = height * scores[i] / 100;
   let px, py; // 線を引くために一つ前の点を覚えておく変数
  // BLANK[1]
  if(i < 1){
    strokeWeight(5);
    point(dx, dy);
  }
  else{
    px = width * (i - 1) / scores.length;
    py = height * scores[i - 1] / 100;
    strokeWeight(5);
    point(px, height - py);
    point(dx, height - dy);
    strokeWeight(1);
    line(px, height - py, dx, height - dy);
  }
}

function scaleY(n){
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n);}
}
}

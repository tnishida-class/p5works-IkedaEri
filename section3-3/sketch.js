// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  // calendar(2019, 10);
  // dayOfWeek(1973, 1, 2)
  console.log(dayOfWeek(2001, 6, 25))
  // for(let i = 2000; i <= 2100; i++){
  //   if(isLeapYear(i)){
  //     console.log(i + "年はうるう年です");
  //   }
  //   else{
  //     console.log(i + "年はうるう年ではありません");
  //   }
  // }
}

// function calendar(y, m){
//   let dow = dayOfWeek(y, m, 1);
//   for(let d = 1; d <= daysInMonth(y, m); d++){
//     // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
//   }
// }

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
   return isLeapYear(y) ? 366 : 365;
   // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let count = 0;
  for(let i = 1973; i < y; i++){
    count += daysInYear(i);
  }

  if((count + dayOfYear(y, m, d)) % 7 == 1){
    return 1;
    // console.log("月曜日");
  }
  if((count + dayOfYear(y, m, d)) % 7 == 2) {
    return 2;
    // console.log("火曜日");
  }
  if((count + dayOfYear(y, m, d)) % 7 == 3){
    return 3;
    // console.log("水曜日");
  }
  if((count + dayOfYear(y, m, d)) % 7 == 4){
    return 4;
    // console.log("木曜日");
  }
  if((count + dayOfYear(y, m, d)) % 7 == 5){
    return 5;
    // console.log("金曜日");
  }
  if((count + dayOfYear(y, m, d)) % 7 == 6){
    return 6;
    // console.log("土曜日");
  }
  else{
    return 0;
    // console.log("日曜日");
  }
  // BLANK[2]
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}

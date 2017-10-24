
var katzDeli = [];
var katzDeliLine = 0;
function takeANumber(katsDeliLine, name){
  katzDeli.push(name);
  katzDeliLine = (katzDeliLine + 1);
  return ('Welcome, ' + name + '. You are number ' + (katzDeliLine) + ' in line.')
} 
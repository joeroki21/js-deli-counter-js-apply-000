

debugger;
var katzDeli = []
function takeANumber(Deli, name){
  katzDeli = Deli;
  katzDeli.push(name);
  return ('Welcome, ' + name + '. You are number ' + (katzDeli.indexOf(name)+1) + ' in line.')
} 
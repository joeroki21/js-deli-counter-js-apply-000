


var katzDeli = []
function takeANumber(Deli, name){
  katzDeli = Deli;
  katzDeli.push(name);
  return ('Welcome, ' + name + '. You are number ' + (katzDeli.indexOf(name)+1) + ' in line.')
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeli.shift() + '.';
  }
}

function currentLine(line){
  var result = 'The line is currently: ';
  if (line.length === 0){
    return 'The line is currently empty.';
  } else {
    for(var i = 0; i <= line.length; i++){
      result += (i+1) + '. ' + line.shift() + ', ';
  }
  }
  return result
}

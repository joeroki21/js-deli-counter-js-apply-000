


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
    return 'Currently serving ' + katzDeli.pop() + ' .';
  }
}

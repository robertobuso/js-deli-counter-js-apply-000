var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
<<<<<<< HEAD
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
=======
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
>>>>>>> 0138cff6cbbf1769ffe7432d5f7e88d36e3135b8
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
<<<<<<< HEAD
    } else {
        return `Currently serving ${katzDeliLine.shift()}.`;
=======
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
>>>>>>> 0138cff6cbbf1769ffe7432d5f7e88d36e3135b8
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
<<<<<<< HEAD
      var i = 0;
      while (i<katzDeliLine.length){
      katzDeliLine[i] = ` ${i+1}. ${katzDeliLine[i]}`;
      i++;
}
        return `The line is currently:${katzDeliLine}`; 
  }
}
=======
    var i = 0;
    while (i<katzDeliLine.length){
    katzDeliLine[i] = `${i}. ${katzDeliLine}`;
    i++;
}
    return `The line is curently: ${katzDeliLine}.`; 
  }
}

>>>>>>> 0138cff6cbbf1769ffe7432d5f7e88d36e3135b8

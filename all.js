function print3x15() {
  for (x = 3; x < 16; x++) {
    for (y = 1; y < 16; y++) {
      console.log(x + ' X ' + y + ' = ' + x * y); 
    }
  }
};
console.log(print3x15());

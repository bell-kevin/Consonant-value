function solve(s) {
  let sum = 0;
  let prevSum = 0;
  let regex = /[^aeiou]/;
  
  for (let letter of s) {
    if ( regex.test(letter) ) {
      const letterValue = letter.charCodeAt() - 96;
      sum += letterValue;
    }
    else if ( !regex.test(letter) ) {
      if (sum > prevSum) {
        prevSum = sum;
        sum = 0;
      }
      else sum = 0;
    }
  }
  return Math.max(sum, prevSum);
};

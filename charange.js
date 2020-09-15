const repeatNumbers = function(data) {
  // Put your solution here
  let x = "";
  for (i = 0; i < data.length; i++)
  {
    // console.log(data[i])
    for (n = 0; n < data[i][1]; n++) {
    x += (data[i][0]);
    }
    x += "\n"
  }
   return x;

};
console.log(repeatNumbers([[1, 10]]));

console.log(repeatNumbers([[1, 2], [2, 3]]));
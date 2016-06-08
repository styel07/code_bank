function factorialize(num) {
  var myArr=[];
  for(var i = 1; i <= num; i++) {
  myArr.push(i);
  }
  return myArr.reduce(function(p,c) {
    return p*c;
  });
}
var names = ['eL', 'mike', 'Nolan'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log(name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name+'!';

console.log(returnMe('lahsdkjaksdahsd'));;

// functionadd(a,b) {
//   return a + b;
// }

var addStatement = (a,b) =>  {
  return a + b;
}

console.log(addStatement(4,7));

var addExpression = (a,b) => a+b;

console.log(addExpression(3,-2));

function getTempCallBack(location, callback) {
  callback(undefined, 78);
  callback('City Not Found');
}

getTempCallBack('Kapolei', function(err,temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject("City Not Found!!!")
    },1000)
  });
}

getTempPromise('Kapolei')
.then(function(temp) {
  console.log("promise success ", temp);
}), function(err) {
  console.log("promise error ", err);
}

function addPromise(a,b) {
  return new Promise(function(res,rej) {
    if(typeof a === 'number' && typeof b === "number") {
      res(a+b);
    } else {
      rej('A & B need to be numbers');
    }
  });
}

addPromise(5,3).then(function(sum) {
  console.log("success", sum);
}, function(err) {
  console.log("error", err);
});

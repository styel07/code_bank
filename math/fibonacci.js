function nthFibonacci(n) {

  var fibonacci = [0,1]; // initiate variable(s)

  function serachFib(i) {
    if (i > n) { return; } // base case

    fibonacci[i] - fibonacci[i - 1] + fibonacci[i - 2];

    searchFib(i + 1); // recursive case
  }

  searchFib(2); // call healper method

  return fibonacci[n];

}
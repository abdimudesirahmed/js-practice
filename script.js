function canNest(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
    var arr3 = arr1.sort();
    var arr4 = arr2.sort();
    if(arr3[0] < arr4[0] && arr3[arr3.length - 1] > arr4[arr4.length - 1]) {
      return true;
    } else {
      return false;
    }
  }
}

var result1 = canNest([7, 2, 3, 4], [2, 3]);
console.log(result1); // true






function isMagic(a) {
  var sum = 0;

  if (Array.isArray(a)) {
      console.log('It is an array');

      for (var i = 0; i < a.length; i++) {
          var num = a[i];

          if (typeof num !== 'number') {
              console.log(num + ' is not a number');
          } else {
              if (isPrime(num)) {
                  sum += num;
              }
          }
      }
      console.log('Sum of prime numbers is:', sum);
  } else {
      console.log('Input is not an array');
  }

  function isPrime(num) {
      if (num <= 1) return false; // 0 and 1 are not prime
      for (var j = 2; j <= Math.sqrt(num); j++) {
          if (num % j === 0) return false; // Not a prime number
      }
      return true; // It's a prime number
  }
  if(sum == a[0]){
    console.log('it is magic array')
  } 
  else {
    console.log('it is not a magic array')
  }
}

// Example usage:
isMagic([1, 2, 'e', 3, 4, 5, 6, 7, 8, 9, 0]);
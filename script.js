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
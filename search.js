// Example code - two different search algorithms: linear search and binary search
// Written on 2019-07-17

var myArr = ('' + Array(20));
console.log('Type: ' + typeof(myArr) + "; Value: " + myArr);
var myArr = ('' + Array(20)).split(',');
console.log('Type: ' + typeof(myArr) + "; Value: " + myArr);
var myArr = ('' + Array(20)).split(',').map(function(){ return this[0]++;}, [1]);
console.log('Type: ' + typeof(myArr) + "; Value: " + myArr);

/*
function linearSearch(arr, match) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === match) {
      return i;
    }
  }
  return false;
}
console.log(linearSearch(myArr, 5));

function binarySearch(arr, match) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== match && start <= end) {
    if(match > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if(arr[middle] === match) {
    return middle;
  }
  return false;
}
console.log(binarySearch(myArr, 3));

// indexOf
// find or findIndex

*/
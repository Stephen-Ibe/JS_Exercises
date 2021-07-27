// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let array = [];
  var lower = Math.min(arr[0], arr[1]);
  var upper = Math.max(arr[0], arr[1]);

  for (var i = lower; i <= upper; i++) {
    array.push(i);
  }

  let ans = array.reduce((a, b) => {
    return a + b;
  });

  return ans;
}

sumAll([4, 1]);

// Test Cases
sumAll([1, 4]); // 10
sumAll([5, 10]); // 15
sumAll([5, 10]); // 15
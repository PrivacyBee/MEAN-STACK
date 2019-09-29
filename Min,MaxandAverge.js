var arr = [1, -2, 9, 4];

var min = arr[0];
var max = arr[0];
var average = 0;

for(var i = 0; i < arr.length; i++) {
  if(arr[i] < min) min = arr[i];
  if(arr[i] > max) max = arr[i];
  average += arr[i];
}

average /= arr.length;

console.log("Min is : " + min);
console.log("Max is : " + max);
console.log("Average is : " + average);
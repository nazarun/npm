// var arr = process.argv;
// var sum = 0;
// for(var i=2; i<arr.length; i++){
//     sum += Number(arr[i]);
// }
// console.log(sum);

var fs = require('fs');
var buffer = fs.readFileSync('../program.js');
var str = buffer.toString();
var result = (str.split("\n").length)-1;
return result;
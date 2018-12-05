var fs = require('fs');
 

console.log("before file");
// fs.readFile("../jasmine/anyfile","utf8",function(error, dataa){
//     console.log(dataa);                                              ****this is for asynchornus means our system will not wait to completely read this file it will just go to next line.
// });   ********here fs.readFile is asynchronous function
console.log("executed after file");

//****how to do synchronous 
var data = fs.readFileSync("../jasmine/anyfile","utf8");   //fs.readfileSync is synchronous function.
console.log(data);

console.log("here we are going completry synchronous way");
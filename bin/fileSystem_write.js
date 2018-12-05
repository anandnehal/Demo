var fs = require('fs');

// var data=fs.writeFile("C:/Users/Anand jha/Desktop/xpath practice/file1","hey are you working hard or hardly working","utf8",function(error){
//    // if(error) throw error;
//     console.log("file written");
// });

//console.log("this is asynchronous");


var data = fs.writeFileSync("C:/Users/Anand jha/Desktop/xpath practice/file2","hey are you listining","utf8");
console.log("syncg");
console.log("mix");



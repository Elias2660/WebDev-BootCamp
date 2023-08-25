const fs = require("fs");
 /* This code will read the file and then write some additional information to it*/


 var fileUsed = "Hello.txt";

 //writing the file

 fs.writeFile(fileUsed, "This is Elias", (err) => {
    if (err) throw err;
    console.log("Things have been written which can be removed...");
 });


//reading from file
 fs.readFile(fileUsed, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
 });


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs  from "fs";
//asking the questions


inquirer
  .prompt(
    {
        message: "Type in url",
        name:"URL",
    }
  )
  .then((answers) => {
    return_image(answers["URL"]);
    fs.writeFile("URL.txt", `The url ${answers["URL"]} has been saved`, (err)=> {
        if (err) throw err;
        console.log("Writing URL now")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


function return_image(URL) {
    var qr_svg = qr.image(URL, { type: 'png' , parse_url: true});
    qr_svg.pipe(fs.createWriteStream("QR.png"));
}


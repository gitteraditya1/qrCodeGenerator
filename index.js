import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Enter the url : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(url);
    var qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream("qr-image.png"));

    // storing the user-provided url in qr-url file
    fs.writeFile("qr-url", url, (err) => {
      if (err) throw err;
      console.log("file has been saved !!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

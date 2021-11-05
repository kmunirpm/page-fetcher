const arg = process.argv.slice(2)
const fs = require('fs');

const request = require('request');
const data = request(arg[0] + "" + arg[1].slice(2), (error, response, body) => {
  fs.writeFile(arg[1], body, err => {
    if (err) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${fs.statSync(arg[1]).size} bytes to ${arg[1]}`);
  })
  //console.log('body:', body); // Print the HTML for the Google homepage.
});

console.log('I should run 1st.')
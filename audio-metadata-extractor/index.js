#!/usr/bin/env node
var validUrl = require('valid-url');
var valid;
var request = require('request');
var SoxCommand = require('sox-audio');
var sox = require('sox-stream');
var command = require('sox');
const fs = require('fs');
const mm = require('music-metadata');
const util = require('util');
var Spinner = require('cli-spinner').Spinner;

var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('|/-\\');

if (process.argv[2]==null){
  console.log('You forgot to enter the URL!')
  process.exit();
}
//Encoding the URL to a proper format
var input = encodeURI(process.argv[2]);


//Check if the URI is valid after encoding it
if (validUrl.isUri(input)){
    console.log('A valid URI');
    valid=true;
}
else {
    console.log('Not a valid URI');
    valid=false
}

//Checking if the URL is live or not
request({method: 'HEAD', uri:input}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("The URL is live!")

    var format = input.slice(-3);
    console.log('Format: '+format);
    var localfile = 'local.'+ format;
    //Stream any response to a file stream
    request(input).pipe(fs.createWriteStream(localfile).on('finish', () => {
      // Start the loading spinner
      spinner.start();
      console.log('\n');
    })).on('finish', ()=> {

      command.identify(localfile, function(err, results) {
        if(results!=null){
          var stats = JSON.stringify(results);
          console.log(stats+'\n');
          mm.parseFile(localfile)
            .then( metadata => {
              console.log(JSON.stringify(util.inspect(metadata, { showHidden: false, depth: null }))+'\n');
              //Remove the newly created local file
              fs.unlinkSync(localfile);

              //Stop loading spinner
              spinner.stop();
            })
            .catch( err => {
              console.error(err.message);
            });

        }else{
          console.log(err);
        }
      });
    })

  }else{
    console.log("The URL is not live!");
  }
})

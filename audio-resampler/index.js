#!/usr/bin/env node
var validUrl = require('valid-url');
var valid;
var request = require('request');
var SoxCommand = require('sox-audio');
var sox = require('sox');
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
}else if(process.argv[3]==null){
  console.log('You forgot to enter the desirable Sample Rate!')
  process.exit();
}else if (process.argv[2]==null && process.argv[3]==null){
  console.log('You should enter a URL and the desirable Sample Rate!');
  process.exit();
}else{
  console.log('Initiating Resampling!');
}

if (isNaN(process.argv[3])) {
    console.log('The Sample Rate should be a number!');
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
    process.exit();
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

      var job = sox.transcode(localfile, 'dest.wav', {
        sampleRate: process.argv[3],
        format: 'wav'
        // channelCount: 2,
        // bitRate: 192 * 1024,
        // compressionQuality: 5, // see `man soxformat` search for '-C' for more info
      });
      job.on('error', function(err) {
        console.error(err);
      });
      job.on('progress', function(amountDone, amountTotal) {
        console.log("progress", amountDone, amountTotal);
      });
      job.on('src', function(info) {
        console.log("Source file info: " + JSON.stringify(info))
        /* info looks like:
        {
          format: 'wav',
          duration: 1.5,
          sampleCount: 66150,
          channelCount: 1,
          bitRate: 722944,
          sampleRate: 44100,
        }
        */
      });
      job.on('dest', function(info) {
        console.log("Destination file info: "+ JSON.stringify(info))
        /* info looks like:
        {
          sampleRate: 44100,
          format: 'mp3',
          channelCount: 2,
          sampleCount: 67958,
          duration: 1.540998,
          bitRate: 196608,
        }
        */
      });
      job.on('end', function() {
        console.log("all done");
        fs.unlinkSync(localfile);
      });
      job.start();

    }));

  }else{
    console.log("The URL is not live!");
    process.exit();
  }
})

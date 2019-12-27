# Audio Resampler



##### Table of Contents  
- [Introduction](#introduction)
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
- [Usage](#usage)
- [Technologies](#technologies)

## Introduction
This is a script that offers the functionality of resampling audio files. The audio files can be provided in the form of  URL. The script, checks that is given a valid and live URL, then downloads the audio file and creates dynamically a local file upon which the analysis will be performed. The desirable *Sample Rate* should be provided in order to resample the audio file and create a new one.

## Getting Started

### Prerequisites

Using NPM, install system specific software dependencies enclosed to package.json.

```
npm install
```

## Usage
Invoke the following command in order to extract metadata:
```
./index.js "https://cdn.avlos.io/aulos/instruments/drums/707 Kick.wav" 45000
```
The result might look something like the following:
```
Initiating Resampling!
A valid URI
The URL is live!
Format: wav
Source file info: {"duration":0.487812,"sampleCount":43025,"channelCount":2,"sampleRate":88200,"format":"wav","bitRate":5}
progress 0 0.487812
progress 0 0.487812
Destination file info: {"duration":0.487822,"sampleCount":21952,"channelCount":2,"sampleRate":45000,"format":"wav","bitRate":2}
progress 0.487812 0.487812
all done
```
## Technologies
* [Nodejs](https://nodejs.org/en/)
* [sox](http://sox.sourceforge.net/)
* [music-metadata](https://www.npmjs.com/package/music-metadata)

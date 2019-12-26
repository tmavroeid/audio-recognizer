# Audio Meatadata Extractor



##### Table of Contents  
- [Introduction](#introduction)
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
- [Usage](#usage)
- [Technologies](#technologies)

## Introduction
This is a script that offers the functionality of extracting metadata (tags) from audio files. The audio files can be provided in the form of  *URL*. The script, checks that is given a *valid* and *live URL*, then downloads the audio file and creates dynamically a local file upon which the analysis will be performed. Currently, both *sox* and *music-metadata* are used for the same purpose which is the extraction of metadata. 

## Getting Started

### Prerequisites

Using NPM, install system specific software dependencies enclosed to package.json. Dependencies of this project are, valid-url, sox, request, music-metadata, etc.

```
npm install
```

## Usage

Invoke the following command in order to extract meatadata:
```
./index.js "https://cdn.avlos.io/aulos/moviequotes/pirates_of_the_carribean/rumalwaysgone.wav"
```
The result might look something like the following:
```
A valid URI
The URL is live!
Format:wav
processing.. |

{"duration":2.531474,"sampleCount":55819,"channelCount":1,"sampleRate":22050,"format":"wav","bitRate":185344}

"{ format:\n   { tagTypes: [ 'exif' ],\n     container: 'WAVE',\n     codec: 'PCM',\n     bitsPerSample: 8,\n     sampleRate: 22050,\n     numberOfChannels: 1,\n     bitrate: 22050,\n     lossless: true,\n     numberOfSamples: 55819,\n     duration: 2.5314739229024945 },\n  native:\n   { exif:\n      [ { id: 'NITR',\n          value:\n           'NTKBg\\u0004\\u0000\\u0000data_\\u0004\\u0000\\u0000DMRTK\\u0002\\u0000\\u0000\\u0002\\u0000\\u0000\\u0000RDH 0\\u0000\\u0000\\u0000\\u0003\\u0000\\u0000\\u0000SKHC\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000o\\u0000\\u0000DOMF\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\n\\u0005[\\u0007NSRV\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0004\\u0000\\u0000\\u0000ATAD\\u0003\\u0002\\u0000\\u0000\\u000e\\u0000\\u0000\\u0000BDNA\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000,*\\u0011@DIUA\\u0004\\u0001\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\u0003\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0001\\u0011\\u0010\\u0000\\u0011\\u0011\\u0001\\u0011\\u0012\\u0013\\u0011!\\u0012!\\u0011\\u0011!\\u0011\\u0011\\u0013C3\\u0012!\\u0012\"\\u0011\\u0012!\"\\u0011!\\u0011\\u0011\\u00124\"\"2(*<=|m-Nj:+\\bXfvdScTTC33#\"\"!!\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011!\\u0012\\u0011!12#$\\u0013#2ACUVV5566EDDCCR3#432B3\\u0013\\u00121!\"\\u0011\\u0011\\u0011\\u0012\\u0011\\u0000\\u0010\\u0011\\u0001!\\u0002\\u0011!!!\\u0011\"#34DTcUUT5EDTT223\\u0013!\\u0011\\u0012\"$2\"2#!#!\"\"2\\u0012\\u0012!!!\\u0011\\u0012!\"\"\"\"\\u0011\\u0011\\u0011!\\u0011\\u0011\\u0013\\u0011\\u0012\\u0013B2443333\"2\"\"\"\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\"\\u0011!\"\\u0011\\u0001\\u0012!\\u0011\\u0010\\u0011\\u0011\\u0011\\u0011\\u0012\\u0011 \\u0011\\u0011\\u0011\\u0010\\u0011\\u0011\\u0010\\u0000\\u0011\\u0001\\u0010\\u0001\\u0011\\u0000\\u0001\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000RTIB\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u00101\\u0002\\u0000QMPB\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000?TMPB\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000_OTBPEUC<\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\b\\u0000\\u0000\\u0000A\\u0000u\\u0000t\\u0000o\\u0000G\\u0000r\\u0000i\\u0000d\\u0000\\u0000\\u0000\\u0000\\u0000\\u0004\\u0000\\u0000\\u0000_lH~@\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000SGLF\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u000e\\u0000\\u0000\\u0000MPBH\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000_OTBTDPI\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\n\\u0005[\\u0007BDCP\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000,*\\u0011@BDKP\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000?\\u001fp?2TIT\\u001e\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\r\\u0000\\u0000\\u0000r\\u0000u\\u0000m\\u0000a\\u0000l\\u0000w\\u0000a\\u0000y\\u0000s\\u0000g\\u0000o\\u0000n\\u0000e\\u0000NELT\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0002\\u0000\\u0000\\u0000SNRTU\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0002\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000`lh~@\\b\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u001e0~@\\u0000\\u0000\\u0000@xY\\u0000@\\u0000\\u0000\\u0000`\\u0018f\\u0005@\\u0000\\u0000\\u0000@\\u0013N\\u0007@\\u0000\\u0000\\u0000 )\\f\\u001a@\\u0000\\u0000\\u0000`|!\\u001b@\\u0000\\u0000\\u0000\\u0000q\\u0010\\u001c@\\u0000\\u0000\\u0000@i\\u001a\\u001d@' },\n        { id: 'INAM', value: 'rumalwaysgone' } ] },\n  quality: { warnings: [] },\n  common:\n   { track: { no: null, of: null },\n     disk: { no: null, of: null },\n     title: 'rumalwaysgone' } }"
```
The results from *sox*:
```
{"duration":2.531474,"sampleCount":55819,"channelCount":1,"sampleRate":22050,"format":"wav","bitRate":185344}
```

The results from *music-metadata*:
```
"{ format:\n   { tagTypes: [ 'exif' ],\n     container: 'WAVE',\n     codec: 'PCM',\n     bitsPerSample: 8,\n     sampleRate: 22050,\n     numberOfChannels: 1,\n     bitrate: 22050,\n     lossless: true,\n     numberOfSamples: 55819,\n     duration: 2.5314739229024945 },\n  native:\n   { exif:\n      [ { id: 'NITR',\n          value:\n           'NTKBg\\u0004\\u0000\\u0000data_\\u0004\\u0000\\u0000DMRTK\\u0002\\u0000\\u0000\\u0002\\u0000\\u0000\\u0000RDH 0\\u0000\\u0000\\u0000\\u0003\\u0000\\u0000\\u0000SKHC\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000o\\u0000\\u0000DOMF\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\n\\u0005[\\u0007NSRV\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0004\\u0000\\u0000\\u0000ATAD\\u0003\\u0002\\u0000\\u0000\\u000e\\u0000\\u0000\\u0000BDNA\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000,*\\u0011@DIUA\\u0004\\u0001\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\u0003\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0001\\u0011\\u0010\\u0000\\u0011\\u0011\\u0001\\u0011\\u0012\\u0013\\u0011!\\u0012!\\u0011\\u0011!\\u0011\\u0011\\u0013C3\\u0012!\\u0012\"\\u0011\\u0012!\"\\u0011!\\u0011\\u0011\\u00124\"\"2(*<=|m-Nj:+\\bXfvdScTTC33#\"\"!!\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011!\\u0012\\u0011!12#$\\u0013#2ACUVV5566EDDCCR3#432B3\\u0013\\u00121!\"\\u0011\\u0011\\u0011\\u0012\\u0011\\u0000\\u0010\\u0011\\u0001!\\u0002\\u0011!!!\\u0011\"#34DTcUUT5EDTT223\\u0013!\\u0011\\u0012\"$2\"2#!#!\"\"2\\u0012\\u0012!!!\\u0011\\u0012!\"\"\"\"\\u0011\\u0011\\u0011!\\u0011\\u0011\\u0013\\u0011\\u0012\\u0013B2443333\"2\"\"\"\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\\u0011\"\\u0011!\"\\u0011\\u0001\\u0012!\\u0011\\u0010\\u0011\\u0011\\u0011\\u0011\\u0012\\u0011 \\u0011\\u0011\\u0011\\u0010\\u0011\\u0011\\u0010\\u0000\\u0011\\u0001\\u0010\\u0001\\u0011\\u0000\\u0001\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000RTIB\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u00101\\u0002\\u0000QMPB\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000?TMPB\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000_OTBPEUC<\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\b\\u0000\\u0000\\u0000A\\u0000u\\u0000t\\u0000o\\u0000G\\u0000r\\u0000i\\u0000d\\u0000\\u0000\\u0000\\u0000\\u0000\\u0004\\u0000\\u0000\\u0000_lH~@\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000SGLF\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u000e\\u0000\\u0000\\u0000MPBH\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000_OTBTDPI\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\n\\u0005[\\u0007BDCP\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000,*\\u0011@BDKP\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000?\\u001fp?2TIT\\u001e\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\r\\u0000\\u0000\\u0000r\\u0000u\\u0000m\\u0000a\\u0000l\\u0000w\\u0000a\\u0000y\\u0000s\\u0000g\\u0000o\\u0000n\\u0000e\\u0000NELT\\u0004\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0002\\u0000\\u0000\\u0000SNRTU\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0001\\u0002\\u0000\\u0000\\u0000\\u0001\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000`lh~@\\b\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u001e0~@\\u0000\\u0000\\u0000@xY\\u0000@\\u0000\\u0000\\u0000`\\u0018f\\u0005@\\u0000\\u0000\\u0000@\\u0013N\\u0007@\\u0000\\u0000\\u0000 )\\f\\u001a@\\u0000\\u0000\\u0000`|!\\u001b@\\u0000\\u0000\\u0000\\u0000q\\u0010\\u001c@\\u0000\\u0000\\u0000@i\\u001a\\u001d@' },\n        { id: 'INAM', value: 'rumalwaysgone' } ] },\n  quality: { warnings: [] },\n  common:\n   { track: { no: null, of: null },\n     disk: { no: null, of: null },\n     title: 'rumalwaysgone' } }"
```
## Technologies
* [Nodejs](https://nodejs.org/en/)
* [sox](http://sox.sourceforge.net/)
* [music-metadata](https://www.npmjs.com/package/music-metadata)

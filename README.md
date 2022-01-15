# Dimmify

An app to control the brightness of a light bulb remotely.

## How to Run

To run this project you will need to have NodeJS and NPM installed.

After cloning the repository, run `npm install` to install the files in package.json

`npm start` will provide you with a barcode which can be scanned to view the project using expo.


## Description

The application connects to an ESP8266 MicroController (MC) over wifi and sends the current brigtness to the MC as an integer value.

### Connect Screen

The connect screen has an input field which takes the IP address of the ESP8266 MC you are connecting to. 

### Add/Edit Profile Screen

Here you can manage profiles for a particular light setting you would like to keep saved.



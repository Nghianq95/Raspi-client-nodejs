/*var SerialPort = require('serialport');

const ModbusMaster = require('modbus-rtu').ModbusMaster;
 

const serialPort = new SerialPort("COM4", {
   baudRate: 9600
});
const master = new ModbusMaster(serialPort);

var _date = new Date();
var dd = _date.getDate().toString();
var mm = (_date.getMonth()+1).toString();
var yyyy = _date.getFullYear().toString();

var data = {
    tempEnv: 1,
    humd: 2,
    EC: 3,
    pH: 7.0,
    tempWater: 4,
    date: dd+"/"+mm+"/"+yyyy,
};

var status = {
    B0: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    B4: 0,
    B5: 0,
    van: 0
}

master.writeSingleRegister(2, 6, 150);
master.writeSingleRegister(2, 84, 290);
console.log("sent");*/


var x = "27/09/2011".split('/')
var y = "29/10/2011".split('/')

// create date objects using year, month, day
var a = new Date(x[2],x[1],x[0])
var b = new Date(y[2],y[1],y[0])

// calculate difference between dayes
var c = ( b - a )

// convert from milliseconds to days
// multiply milliseconds * seconds * minutes * hours
var d = c / (1000 * 60 * 60 * 24)

// show what you got
console.log( d )
/*"05/04/2018"*/
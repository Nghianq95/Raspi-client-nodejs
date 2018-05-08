var io = require('socket.io-client');
var socket = io.connect('http://207.148.119.205');
/*var SerialPort = require('serialport');

const ModbusMaster = require('modbus-rtu').ModbusMaster;
 

const serialPort = new SerialPort("COM4", {
   baudRate: 9600
});
const master = new ModbusMaster(serialPort);*/

var _date = new Date();
var dd = _date.getDate().toString();
var mm = (_date.getMonth()+1).toString();
var yyyy = _date.getFullYear().toString();

var data = {
    tempEnv: 26,
    humd: 62,
    EC: 3,
    pH: 7.0,
    tempWater: 24,
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

socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.on("server send raspi", (data)=>{
    console.log(data);
    
 /*  master.writeSingleRegister(2, 6, 150);
    master.writeSingleRegister(2, 84, 290);*/
});
//id: 1 - WCL-13A
//    2 - WIL-EC
//    3 - WIL-pH
setInterval(()=>{
    data.tempEnv++;
    data.humd++;
    data.EC++;
   /* master.writeSingleRegister(2, 6, 150);
    master.writeSingleRegister(2, 84, 290);

    master.writeSingleRegister(3, 6, 600);
    master.writeSingleRegister(3, 84, 650);

    master.readHoldingRegisters(1, 128, 1).then((_humd) => {
        
        data.humd=_humd[0]/100;
        console.log("Humd" + data.humd);
    }, (err) => {
        console.log(err);
    });
    master.readHoldingRegisters(1, 144, 1).then((_temp) => {
        
        data.tempEnv=_temp[0]/100;
        console.log("TempEnv" + data.tempEnv);
    }, (err) => {
        console.log(err);
    });
    master.readHoldingRegisters(2, 128, 1).then((_EC) => {
        
        data.EC = _EC[0]/100;
        console.log("EC:" + data.EC);
    }, (err) => {
        console.log(err);
    });
    master.readHoldingRegisters(2, 129, 1).then((_status_A1_WIL_EC) => {
        
        var bin = Math.abs(_status_A1_WIL_EC).toString(2);
        if(bin[0] === '1' && bin.length>=14){
        	status.B4 = 1;
        }
        else{
        	status.B4 = 0;
        }
        console.log("B4:" + status.B4);
    }, (err) => {
        console.log(err);
    });
    master.readHoldingRegisters(2, 145, 1).then((_status_A2_WIL_EC) => {
        
        var bin = Math.abs(_status_A2_WIL_EC).toString(2);
        if(bin[0] === '1'){
        	status.B2 = 1;
        }
        else{
        	status.B2 = 0;
        }
        console.log("B2:" + status.B2);
    }, (err) => {
        console.log(err);
    });

    master.readHoldingRegisters(3, 128, 1).then((_pH) => {
        
        data.pH = _pH[0]/100;
        console.log("pH:" + data.pH);
    }, (err) => {
        console.log(err);
    });
     master.readHoldingRegisters(3, 144, 1).then((_tempWater) => {
        
        data.tempWater = _tempWater[0]/10;
        console.log("tempWater" + data.tempWater);
    }, (err) => {
        console.log(err);
    });

master.readHoldingRegisters(3, 129, 1).then((_status_A1_WIL_pH) => {
        
        var bin = Math.abs(_status_A1_WIL_pH).toString(2);
        if(bin[0] === '1' && bin.length>=14){
            status.B3 = 1;
        }
        else{
            status.B3 = 0;
        }
        console.log("B3:" + status.B3);
    }, (err) => {
        console.log(err);
    });
    master.readHoldingRegisters(3, 145, 1).then((_status_A2_WIL_pH) => {
        
        var bin = Math.abs(_status_A2_WIL_pH).toString(2);
        if(bin[0] === '1'){
            status.B1 = 1;
        }
        else{
            status.B1 = 0;
        }
        console.log("B1:" + status.B1);
    }, (err) => {
        console.log(err);
    });*/

    socket.emit('client send data', data);
    socket.emit('client send status', status);

},1000);

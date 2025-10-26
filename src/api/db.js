const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dummydata'
    
});

connection.connect((err)=>{
    if(err){
        console.error("error connecting database : ", err);
    }else{
        console.log("connected to database");
    }
});

module.exports = connection;
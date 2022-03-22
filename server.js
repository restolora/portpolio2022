const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const app = express();


// middlewares 
app.use(parser.json());
app.use(cors());

// mysql db connection
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
});

con.connect((err) => {
    if(!err){
        console.log('Connected');
    }else{
        // console.log('Connection err: ' + JSON.stringify(err,undefined,2));
        console.log('Connection err: ' + err);
    }
})
// api
const port = 3001;
app.listen(port, function(){
    console.log('Express server is running at port', port)
})


// get all users
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    con.query(sql, function( err, rows ){
        if(!err){
            res.send(rows)
        }else{
            res.send(err)
        }
    })
})

// get user by id 
app.get('/user/:id', (req, res) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    con.query(sql, [ req. params.id ] , function( err, rows ){
        if(!err){
            res.send(rows)
        }else{
            res.send(err)
        } 
    })
})

// delete users by id 
app.delete('/user/delete/:id', (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    con.query(sql, [ req.params.id ] , function( err, rows ){
        if(!err){
            res.send("DELETE success")
        }else{
            res.send(err)
        }
    })
})
// insert users
app.post('/user/create', (req, res) => {
    // req.query if get method 
    // let emp = req.query;
    // req.body if post method
    let emp = req.body;

    const sql = "INSERT INTO users(fname,lname,contact) VALUES(?,?,?)";
    con.query(sql, [ emp.fname, emp.lname, emp.contact ] , function( err, rows ){
        if(!err){
            res.send("Insert success")
        }else{
            res.send(err)
        }
    })
})
// update users by id 
app.put('/user/update', (req, res) => {
    let emp = req.body;
    const sql = "UPDATE users SET fname=?, lname=?, contact=? WHERE id=?";
    con.query(sql, [ emp.fname, emp.lname, emp.contact, emp.id ] , function( err, rows ){
        if(!err){
            res.send("Update success")
        }else{
            res.send(err)
        }
    })
})

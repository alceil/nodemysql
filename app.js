const express = require('express');
const mysql = require('mysql');


const db =mysql.createConnection(
    {
        host     : 'localhost',
        user     : 'NemesisX',
        password : 'ilmvm123',
        // database : 'my_db'
    }
);

db.connect((err) =>
{
    if(err) throw err;
    console.log('MySql connected');
}
);
const app = express();

app.get('/createdb',(req,res) =>
{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('Database Created');
       });

}
);

app.get('/createpoststable',(req,res)=>
{
    let sql ='CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),title VARCHAR(255),body VARCHAR(255),PRIMARY KEY id)';
    db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('PostsTable created');
    }
    );
}
);




app.get('/addpost1',(req,res)=>{
    let post = {title:'Post one',body:'This is post one'};
    let sql = 'INSERT INTO posts SET?';
    let query = db.query(sql,post,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added')
    }
    );
});

app.get('/getposts',(req,res)=>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added')
    }
    );
});

app.get('/getpost/:id',(req,res)=>{
    let sql = 'SELECT * FROM posts WHERE id = ${req.params.id}';
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added')
    }
    );
});

app.get('/updatepost/:id',(req,res)=>{
    let newTitle = 'UPDATED TITLE';
    let sql = 'DELETE FROM posts WHERE id = ${req.params.id}';
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added')
    }
    );
});

app.get('/deletepost/:id',(req,res)=>{
    let newTitle = 'UPDATED TITLE';
    let sql = 'UPDATE posts SET title = ${newTitle} WHERE id = ${req.params.id}';
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added')
    }
    );
});


app.listen('3000',()=>{
    console.log('Server started on port 3000')
}
);

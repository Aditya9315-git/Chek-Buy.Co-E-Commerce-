const mysql=require('mysql')


let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.PasswordDB,
    database:'e-commerce'
})

module.exports=connection
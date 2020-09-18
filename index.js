const express = require('express');
//const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

//app.use( bodyParser.json() );//urlencoded( { extended: true } )

app.get('/', (req, res)=>{

    var payload = {
        username : "admin",
        pass : "123456"
    }

    var secret = 'qưertyuiop';

    var token = jwt.sign( payload, secret, { expiresIn: 2*60 } );

    res.send(token);

});

app.get('/verify', (req, res)=>{

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzcyI6IjEyMzQ1NiIsImlhdCI6MTU5MTAyMTk4NCwiZXhwIjoxNTkxMDIyMTA0fQ.OtBJEo-hPmXiFZhUpE-IKfrizvfyzlbi2fjePfQ2FmY';

    var secret = 'qưertyuiop';

    var decode = jwt.verify( token, secret );

    res.send( decode );

});


// app.get('/:so1/:so2', (req, res)=>{

//     var so1 = req.params.so1;
//     var so2 = req.params.so2;

//     //console.log(c);

//     res.end(so1 + '/' + so2);

// });

// app.get('/Product', (req, res)=>{

//     // Kết nối DB, lấy dữ liệu bảng product
//     res.send('Đây là thông tin product');
// });


// app.post('/User/add', (req, res)=>{
    
//     var name = req.body.name;
//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;

//     // thêm dữ liệu vào DB
//     //res.json(username + '/' + name + '/' + email + '/' + password);
// });

// app.post('/User/edit', (req, res)=>{

// });

// app.post('/User/delete', (req, res)=>{

// })

app.listen(8000, ()=>{ console.log('Đã bật') });
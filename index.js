const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
var path = require('path');

const app = express();

const port = 8080 | 4000
app.use(session({secret:'sessionsecret777'}));
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));






app.get('/', (req,res) => {
    res.send('douglas ♥ cendy')
})




app.listen(port,()=>{
    console.log("Server listening at port", port);
})
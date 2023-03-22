const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

// db connection 
const dbConnection = require('./database/index');
// router connection
const routerInit = require('./entities/router');

const PORT = process.env.PORT || 3000

const app = express();

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.static('uploads'))



routerInit(app);

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

app.get('/test', (req, res) => {
   res.render('setNewPassword')

})


dbConnection().then(() => {

    console.log("db is connected");

    app.listen(PORT, () => {

        console.log("app is listning @ port 3000");
    })

}).catch((err) => {
    console.log("====>error in db: ", err);
});

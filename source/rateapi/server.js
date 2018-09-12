const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rateapp', { useNewUrlParser: true });

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'thisisasecretkey',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

//Defining file of route
const user = require('./routes/userRoute');
app.use('/api', user);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
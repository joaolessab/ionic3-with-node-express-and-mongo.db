const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport').Strategy;

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallBack: true
}, (req, email, password, done) => {
    //Simple verification
    User.findOne({'email': email}, (err, user) =>{
        //If there is an error
        if(err){
            return done(err);
        }
        //If user data already exists
        if(user){
            return done(null, false, 'User with email already exists');
        }

        //If password is smaller than 5
        if (req.body.passport.length < 5){
            return done(null, false, 'Password must not be less than 5 characteres');
        }

        //Creating new User object based on User Model
        const newUser = new user();
        newUser.fullName = req.body.fullName;
        newUser.email = req.body.email;
        newUser.password = newUser.encryptPassword(req.body.password);

        //Saving User on Database
        newUser.save((err) => {
            return done(null, newUser)
        });
    });
}));
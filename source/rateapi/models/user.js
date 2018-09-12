const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//Creating Mongo Schema for Users
const userSchema = mongoose.Schema({
    fullName: {type: String},
    email: {type: String},
    password: {type: String}
});

//Creating Method to encrypt password with Bcrypt
userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

//Creating Method to decrypt password with Bcrypt
userSchema.methods.checkPassword = (password) => {
    //this.password comes from Database
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
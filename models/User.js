const {Schema, model} = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
    },
    {
        email: {
            type: String,
            unique: true,
            required: true,
            //email validation 
        }
    },
    {
        thoughts: {
            //array of _id values referencing thoughts model
        },
    },
    {
        friends: {
            //array of _id values referencing the User model(self reference)
        }
    }
);

//schema settings, create a virtual called friendCount the retrieves the length of the users friend array

//User Model
const User = model('User', UserSchema);

module.exports = User;
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
            validate: {
                // uses a regex to validate that the input is an email
                validator: function(v) {
                  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
                },
                message: props => `${props.email} is not a valid email!`
            } 
        }
    },
    {
        thoughts: {
            //array of _id values referencing thoughts model
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    },
    {
        friends: {
            //array of _id values referencing the User model(self reference)
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//schema settings, create a virtual called friendCount the retrieves the length of the users friend array
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//User Model
const User = model('User', UserSchema);

module.exports = User;
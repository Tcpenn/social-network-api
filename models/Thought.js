const {Schema, model} = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtTest: {
            type: String,
            required: true,
            //must be between 1 and 280 characters
        }
    },
    {
        createdAt: {
            //Date
            //set default timestamp
            //Getter method to timestamp on query
        }
    },
    {
        username: {
            type: String,
            require: true
        }
    },
    {
        reactions: {
            //array of sub documents with the reaction schema
        }
    }
);

//schema settings
//create a virtual called friendCount that returns the lenght of the users friend array

//thought model
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
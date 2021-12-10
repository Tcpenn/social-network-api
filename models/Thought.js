const {Schema, model, Types} = require('mongoose');
const dateFormat = require("../utils/dateFormat")

const ReactionSchema = new Schema (
    {
        reactionId: {
           //use mongoose objectid data type
           //default value is set to an new object
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()        
        },
    
        reactionBody: {
            type: String,
            require: true,
            // 280 characters max
            max: 280
        },

        username: {
            type: String,
            require: true
        },

        createdAt: {
            //Date
            //set default timestamp
            //Getter method to timestamp on query
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }

)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //must be between 1 and 280 characters
            len: [1, 128]
        },

        createdAt: {
            //Date
            //set default timestamp
            //Getter method to timestamp on query
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    
        username: {
            type: String,
            require: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }       
);


//thought model
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema (
    {
        reactionId: {
           //use mongoose objectid data type
           //default value is set to an new object
        }
    },
    {
        reactionBody: {
            type: String,
            require: true,
            // 280 characters max
        }
    },
    {
        username: {
            type: String,
            require: true
        }
    },
    {
        createdAt: {
            //Date
            //set default timestamp
            //Getter method to timestamp on query
        }
    }

)
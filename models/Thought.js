//import dependencies from mongoose
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

//create Reaction Schema
const ReactionSchema = new Schema({
    id:false,
    reactionId: {
    type: Schema.Types.ObjectId,
    // default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    }
},
{
    toJSON: {
      virtuals: true,
      getters: true
    }
    }
);
//create Thought Schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
        type: String,
        required: true,
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

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

  const Thought = model('Thought', ThoughtSchema);
  

module.exports = Thought;
const mongoose = require('mongoose')
const {model, Schema, Types} = require('mongoose')
mongoose.Schema.Types.String.set('trim', true);

const commentSchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        ],
        createdAt: { type: Date, default: Date.now },
        firstName: {
            type: String,
            trim: true,
        },
        rating: {
            type: String,
            trim: true,
        },
        rating: {
            type: String,
            trim: true,
        },
        title: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        }
    },
)
module.exports = model("Comments", commentSchema)
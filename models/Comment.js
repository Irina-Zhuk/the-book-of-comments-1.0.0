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
        createdAt: {
            type: String,
        },
        rating: {
            type: String,
        },
        rating: {
            type: Number,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        }
    },
)
module.exports = model("Comments", commentSchema)


// const { model, Schema} = require('mongoose')
// const mongoose = require("mongoose");
// mongoose.Schema.Types.String.set('trim', true);
//
// const commentSchema =
//
//     new Schema({
//         _id: mongoose.Schema.Types.ObjectId,
//
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User'
//         },
//
//         createdAt: String,
//
//         rating: Number,
//
//         title: String,
//
//         description: String,
//
//     });
//
// module.exports = model('Comment', commentSchema)
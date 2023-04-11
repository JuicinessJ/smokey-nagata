const { Schema, model} = require('mongoose');
const bidSchema = require('./Bid');
const dayjs = require('dayjs');

function dateFormat(date) {
    let newFormat = dayjs(date).format('DD/MM/YYYY [at] h:mm');
    return newFormat
};

const postSchema = new Schema(
    {
        make: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
        },
        condition: {
            type: String,
        },
        mileage: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => dateFormat(date)
        },
        username: {
            type: String,
            required: true,
        },
        // add bids array
        bids: [bidSchema],
        //possible exporation date
    },
    {
        toJSON: {
            getter: true,
            virtuals: true,
        },
        id: false,
    });

const Post = model('post', postSchema);

module.exports = Post;
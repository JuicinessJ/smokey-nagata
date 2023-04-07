const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must use a vaild email']
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    cars: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
});

const User = model('user', userSchema);

module.exports = User;
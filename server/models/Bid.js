const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

function dateFormat(date) {
    dayjs(date).format('DD/MM/YYYY [at] h:mm');
};

const bidSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dateFormat(date),
        }
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

module.exports = bidSchema;
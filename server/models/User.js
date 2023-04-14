const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

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
        match: [/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/, 'Must use a vaild email']
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
  });

  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('user', userSchema);

module.exports = User;
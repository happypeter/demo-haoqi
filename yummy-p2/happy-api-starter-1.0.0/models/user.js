const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, maxlength: 18 },
    avatar: String,
    followings: [{ type: ObjectId, ref: 'User' }],
    password: { type: String, required: true }
  },
  { timestamps: true }
)

UserSchema.methods = {
  comparePassword (_password, cb) {
    // TODO: bcrypt here
    let isMatch = false
    if (this.password === _password) {
      isMatch = true
    }
    cb(null, isMatch)
  }
}

module.exports = mongoose.model('User', UserSchema)

const User = require('../models/user.js')

// 注册
exports.signup = (req, res) => {
  const _user = req.body
  User.findOne({username: _user.username}).exec(
    (err, user) => {
      if (err) return res.status(500).json({msg: '注册失败，请重试', err})
      if (user) {
        return res.status(403).json({msg: '用户名重复，请重新注册'})
      } else {
        user = new User(_user)
        user.save((err, user) => {
          if (err) return res.status(500).json({msg: '注册失败，请重试', err})
          setTimeout(() => res.json({
            // 本地开发测试，添加延迟效果
            user: {
              // 选择需要返回的字段，千万别把密码也给返回了
              _id: user._id,
              username: user.username
            },
            msg: '注册成功'
          }), 400)
        })
      }
    }
  )
}

// 登录
exports.login = (req, res) => {
  const _user = req.body
  User.findOne({username: _user.username})
    .exec(
      (err, user) => {
        if (err) return res.status(500).json({msg: '登录失败，请重试', err})
        if (!user) {
          return res.status(400).json({ msg: '用户不存在' })
        }
        user.comparePassword(_user.password, (err, isMatch) => {
          if (err) return res.status(500).json({msg: '登录失败，请重试', err})
          if (isMatch) {
            setTimeout(() => res.json({
              user: {
                // 选择需要返回的字段，千万别把密码也给返回了
                _id: user._id,
                username: user.username
              },
              msg: '登录成功'
            }), 4000)
          } else {
            res.status(401).json({msg: '密码错误，请核对后重试'})
          }
        })
      }
    )
}

// 登出功能
exports.logout = (req, res) => {
  res.json({ msg: '登出成功' })
}

// 通过 id 拿到用户信息
exports.getById = (req, res) => {
  User.findOne({_id: req.params.id}, '_id username avatar followings')
  .exec(
    (err, user) => {
      if (err) {
        return res.status(500).json({ msg: '查找用户失败', err })
      }
      if (!user) {
        res.status(400).json({ msg: '未找到记录' })
      } else {
        return setTimeout(() => res.json({ msg: '读取用户成功', user }), 300)
      }
    }
  )
}

// 读取所有用户
exports.all = (req, res) => {
  User.find({}, '_id username avatar followings').exec().then(
    users => {
      setTimeout(() =>
      res.json({ users }),
      200)
    }
  )
}

exports.updateAvatar = (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (user) {
      if (req.file && req.file.filename) {
        user.avatar = req.file.filename
      }
      user.save(err => {
        if (err) return console.log(err)
        res.json({
          user: {
            avatar: user.avatar,
            _id: user._id,
            username: user.username,
            followings: user.followings
          },
          message: '用户头像更新成功'
        })
      })
    } else {
      res.status(404).json({
        message: '没有该用户'
      })
    }
  })
}

exports.removeFollowing = (req, res) => {
  User.findOne({ _id: req.body.currentUserId })
  .exec().then(
    user => {
      let followings = user.followings
      let { userId } = req.body
      let index = followings.indexOf(userId)
      followings.splice(index, 1)
      user.save(() => {
        res.json({
          user: {
            username: user.username,
            _id: user._id,
            avatar: user.avatar,
            followings: user.followings
          },
          msg: '好友删除成功'
        })
      })
    }
  )
}

exports.addFollowing = (req, res) => {
  User.findOne({ _id: req.body.currentUserId })
  .exec().then(
    user => {
      let { followings } = user
      let { userId } = req.body
      followings.push(req.body.userId)
      user.save(() => {
        res.json({
          msg: '添加成功',
          user: {
            username: user.username,
            _id: user._id,
            avatar: user.avatar,
            followings: user.followings
          }
        })
      })
    }
  )
}

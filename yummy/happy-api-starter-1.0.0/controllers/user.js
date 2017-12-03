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
  User.findOne({_id: req.params.id}, '_id username')
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
  User.find({}, '_id username').exec().then(
    users => {
      setTimeout(() =>
      res.json({ users }),
      200)
    }
  )
}

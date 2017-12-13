let Comment = require('../models/comment')

exports.all = function (req, res) {
  Comment.find().populate('user dish', 'username avatar poster').exec().then(
    comments => {
      return res.json({ msg: '读取评论成功', comments })
    }
  )
}

exports.new = function (req, res) {
  let comment = req.body
  comment = new Comment(comment)
  comment.save(function (err, comment) {
    if (err) return res.status(403).json({ msg: '保存失败，请重试', err })
    Comment.findOne({ _id: comment._id }).populate('user dish', 'username avatar poster').exec().then(
      comment => {
        return res.json({ msg: '保存评论成功', comment })
      }
    )
  })
}

exports.seed = (req, res) => {
  const comments = [
    {
      content: '好吃',
      dish: '5a26738e8ed6687f81859d24',
      user: '5a2638f58b8b05037aed5007'
    },
    {
      content: '好吃',
      dish: '5a26738e8ed6687f81859d24',
      user: '5a2638f58b8b05037aed5007'
    }
  ]

  comments.forEach(comment => {
    let newComment = new Comment(comment)
    newComment.save()
  })

  res.send('填充数据库成功！')
}

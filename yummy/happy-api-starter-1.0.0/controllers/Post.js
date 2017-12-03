const Post = require('../models/post.js')

// 删除一篇文章
exports.remove = (req, res) => {
  const { id } = req.params
  Post.findById({_id: id}).exec(
    (err, post) => {
      if (err) return res.status(500).json({ msg: '查找失败', err })
      if (!post) {
        // 如果 id 不存在，err 为 null 但是 post 会为空
        res.status(400).json({ msg: '未找到记录' })
      } else {
        post.remove(err => {
          if (err) return res.status(500).json({error: err.message})
          setTimeout(() => res.json({ msg: '删除成功！' }), 400)
        })
      }
    }
  )
}

// 列出所有文章
exports.all = (req, res) => {
  Post.find({}).exec(
    (err, posts) => {
      if (err) return res.status(500).json({ msg: '查找失败', err })
      if (posts) {
        return setTimeout(() => res.json({ msg: '读取成功', posts }), 400)
      }
    }
  )
}

// 新建一篇文章
exports.new = (req, res) => {
  const _post = req.body
  const post = new Post(_post)
  post.save((err, post) => {
    if (err) return res.status(500).json({ msg: '保存失败，请重试', err })
    res.json({
      post,
      msg: '保存成功'
    })
  })
}

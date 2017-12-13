const User = require('./controllers/user')
const Dish = require('./controllers/dish')
const Comment = require('./controllers/comment')
const multer = require('multer')
const uploadAvatar = multer({ dest: './public/uploads/avatars' })
let uploadPoster = multer({ dest: './public/uploads/posters' })

module.exports = app => {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:id', User.getById)
  app.post('/avatar', uploadAvatar.single('avatar'), User.updateAvatar)
  app.post('/user/follow', User.addFollowing)
  app.post('/user/unfollow', User.removeFollowing)

  // dishes
  app.get('/dishes', Dish.all)
  app.get('/seed-dishes', Dish.seed)
  app.delete('/dish/:id', Dish.remove)
  app.post('/dish', Dish.new)
  app.post('/dish/poster', uploadPoster.single('poster'), Dish.uploadPoster)

  // comments
  app.post('/comment', Comment.new)
  app.get('/comments', Comment.all)
  app.get('/seed-comments', Comment.seed)
}

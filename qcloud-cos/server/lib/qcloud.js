const COS = require('cos-nodejs-sdk-v5')
const config = require('../config')

const cos = new COS(config)

exports.getBucket = (req, res) => {
  cos.getBucket(config, (err, data) => {
    if(err) {
      res.json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

exports.auth = (req, res) => {
  const params = {
    SecretId: `${config.SecretId}`,
    SecretKey: `${config.SecretKey}`,
    Method: req.body.method,
    Key: req.body.Key
  }

  const cos = new COS(params)

  const Authorization = cos.getAuth(params)
  res.status(200).json(Authorization)
}

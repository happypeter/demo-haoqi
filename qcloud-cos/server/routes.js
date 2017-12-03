const express = require('express')
const router = express.Router()
const qcloud = require('./lib/qcloud')

router.post('/auth', qcloud.auth)
router.get('/bucket', qcloud.getBucket)

module.exports = router

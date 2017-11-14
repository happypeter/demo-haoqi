import axios from 'axios'
import COS from 'cos-js-sdk-v5'
import Settings from '../settings'

const getAuthorization = (options, callback) => {
    axios.post(Settings.authUrl, options)
    .then(
      res => {
        const authorization = res.data
        callback(authorization);
      }
    )
    .catch(err => {
      if (err) {
        console.log(err)
      }
    })
}

const cos = new COS({
  AppId: Settings.AppId,
  getAuthorization: getAuthorization,
})

export default cos

'use strict'
const https = use('https')
const axios = use('axios')
const imgurUpload = 'https://api.imgur.com/3/upload'
const Env = use('Env')


class ComplaintController {

  async store({request, response, params}){
    const data = request.all()
    var headers = { 'Authorization':  Env.get('IMGUR_CLIENT_ID') }

    axios.post(imgurUpload, data.image , {headers: headers})
      .then(function (response) {
        console.log(response.status)
      })
      .catch(function (error) {
        console.log(error)
      });
  }
}

module.exports = ComplaintController

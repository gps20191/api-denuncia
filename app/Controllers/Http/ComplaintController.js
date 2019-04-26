'use strict'
const https = use('https')
const axios = use('axios')
const imgurUpload = 'https://api.imgur.com/3/upload'
const Env = use('Env')
const Image = use('App/Models/Image')


class ComplaintController {

  async store({request, response, params}){
    const requestData = request.only(['image', 'busLine', 'latitude', 'longitude', 'date'])

    var headers = { 'Authorization':  Env.get('IMGUR_CLIENT_ID') }

    const res = await axios.post(imgurUpload, requestData.image , {headers: headers})

    const {status, data: responseData} = await res

    if (status === 200){
      const data = responseData.data

      const imageData = {
        external_id: data.id,
        url: data.link,
        ...requestData
      }
      
      const image = await Image.create(imageData)
    }


    return { status }

  }
}

module.exports = ComplaintController

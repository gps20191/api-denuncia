'use strict'
const https = use('https')
const axios = use('axios')
const imgurUpload = 'https://api.imgur.com/3/upload'
const Env = use('Env')


class ComplaintController {

  async store({request, response, params}){
    const {image} = request.all()
    var headers = { 'Authorization':  Env.get('IMGUR_CLIENT_ID') }

    const res = await axios.post(imgurUpload, image , {headers: headers})
    const {status, success, data: responseData} = await res

    // if (success){
    //  salvar imagem e dados no banco
    // }


    return { status }

  }
}

module.exports = ComplaintController

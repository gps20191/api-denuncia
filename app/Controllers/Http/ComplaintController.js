'use strict'
const https = use('https')
const axios = use('axios')
const imgurUpload = 'https://api.imgur.com/3/upload'
const Env = use('Env')
const Image = use('App/Models/Image')


class ComplaintController {

  async store({request, response, params}) {
    // Pega o base64 da imagem para dar upload no imgur
    let base64StringImage = request.input('image')
    let headers = { 'Authorization':  Env.get('IMGUR_CLIENT_ID') }
    const res = await axios.post(imgurUpload, base64StringImage , { headers: headers })

    // Recebe o response data da imagem upada no imgur
    const { data: responseImgurData } = await res

    // Criando um registro da imagem no banco caso o upload seja bem sucedido no imgur
    if (responseImgurData.success) {
      const requestData = request.only(['nome', 'tipo', 'data_criacao', 'data_envio', 'latitude', 'longitude', 'linha_onibus', 'numero_onibus'])

      const imageData = {
        external_id: responseImgurData.data.id,
        url: responseImgurData.data.link,
        ...requestData
      }
      
      let responseDataObj;
      let dbImage;

      try {
        dbImage = await Image.create(imageData)
        responseDataObj = {
          message: "The image was successfully uploaded!",
          status: responseImgurData.status,
          data: dbImage
        }
      }
      catch(err) {
        responseDataObj = {
          message: err.message,
          status: 500,
        }
      }
      
      return response.status(responseDataObj.status).send(responseDataObj)
    }

    return response.status(responseImgurData.status).send({
      message: "An error has occurred while uploading the image on imgur.",
      status: responseImgurData.status,
    })
  }
}

module.exports = ComplaintController

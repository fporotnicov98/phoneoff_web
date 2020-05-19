import * as axios from 'axios'


const instanse = axios.create({
    baseURL: 'https://phoneoff.westeurope.cloudapp.azure.com/Phone/',
    withCredentials: true
})


const API = {
    getPhones(){
        return instanse.get('GetPhones')
    },
    getProduct(productId){
        return instanse.get(`GetPhone/?id=${productId}`)
    }
}

export default API
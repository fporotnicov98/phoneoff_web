import * as axios from 'axios'


const instanse = axios.create({
    baseURL: 'https://phoneoff.westeurope.cloudapp.azure.com/Phone/',
    withCredentials: true
})


const API = {
    getPhones(){
        return instanse.get('GetPhones')
    },
    getPhonePage(phoneId){
        return instanse.get(`GetPhone/?${phoneId}`)
    }
}

export default API
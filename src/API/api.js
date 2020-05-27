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
    }, 
    addOrder(prodId,userId,date,price){
        return instanse.post(`addOrder`, {prodId,userId,date,price})
    },
    addRegData(email,login,password,fio,address,phoneNumber){
        return instanse.post(`Registration`, {email,login,password,fio,address,phoneNumber} )
    },
    login(email,password){
        return instanse.post(`Login`, {email,password})
    },
    getAuth(){
        return instanse.get(`Auth`)
    }
}
export default API
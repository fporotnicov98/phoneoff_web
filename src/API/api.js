import * as axios from 'axios'

// const token = "eyJhbGc2iOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJmZWRvcm92MTIzQGdtYWlsLmNvbSIsImV4cCI6MTU5MDYxMDYzMiwiaXNzIjoiRGVtb0FwcCIsImF1ZCI6IkRlbW9BcHBDbGllbnQifQ.1nqDAYj0IcVOsgJ7BA41-4ydhNnnkKoygyDE-6yfjrM"
const instanse = axios.create({
    baseURL: 'https://phoneoff.westeurope.cloudapp.azure.com/Phone/',
    withCredentials: true,
})


const API = {
    getPhones(){
        return instanse.get('GetPhones')
    },
    getProduct(productId){
        return instanse.get(`GetPhone/?id=${productId}`)
    }, 
    addOrder(prodId,email,date,price){
        return instanse.post(`addOrder`, {prodId,email,date,price})
    },
    sendMail(email,login,password,fio,address,phoneNumber){
        return instanse.post(`SendMail`, {email,login,password,fio,address,phoneNumber} )
    },
    login(email,password){
        return instanse.post(`Authentication`, {email,password})
    },
    getAuth(token){
        return instanse.get(`Auth`,{ headers: {"Authorization" : `Bearer ${token}`} })
    },
    getOrder(token){
        return instanse.get('GetOrder',{ headers: {"Authorization" : `Bearer ${token}`} })
    },
    getCode(code){
        return instanse.get(`CodeRegistration?code=${code}`)
    },
    
}
export default API

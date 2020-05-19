import * as axios from 'axios'


// const instanse = axios.create({
//     baseURL: '
// })


const API = {
    getPhones(){
        return axios.get('http://phoneoff.westeurope.cloudapp.azure.com/Phone/GetPhones')
        .then(response => {
            debugger
            return response.data 
        })
    }
}

export default API
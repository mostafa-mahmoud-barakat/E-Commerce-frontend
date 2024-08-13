const { default: axiosClient } = require("./axiosInClient");

const createOrder =(data)=>axiosClient.post('/orders', data)

export default{
    createOrder,
}
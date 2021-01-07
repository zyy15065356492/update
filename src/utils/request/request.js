// import { reject, resolve } from "core-js/fn/promise"
import Axios from 'axios'

const service=Axios.create({
    baseURL:"http://47.104.247.47:8023/",
    timeout:5000
})
// service.interceptors.request.use(
//     config=>{
//         return config
//     },
//     err=>{
//         console.log('request rr')
//     }
// )
// service.interceptors.reponse.use(
//     res=>{
//         return res
//     },
//     err=>{
//         console.log('reponse err')
//     }
// )
export default service

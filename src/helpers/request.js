//这是发送接口的底层的api

/*import axios from 'axios'
import { Message } from 'element-ui'
//修改默认的请求数据包格式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//修改默认的URL请求根目录，后面只需要传相对路径就行了
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
//修改默认跨域请求的类型，因为我们是一个前后端分离的项目
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if(type.toLowerCase() === 'get') {
      //params是即将与请求一起发送的URL参数
      option.params = data
    }else {
      option.data = data
    }
    axios(option).then(res => {
      console.log(res.data)
      if(res.data.status === 'ok') {
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}*/
import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//blog-server.hunger-valley.com'


export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }
 
    axios(option).then(res => {
      console.log(res.data)
      if(res.data.status === 'ok') {
        if(res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}

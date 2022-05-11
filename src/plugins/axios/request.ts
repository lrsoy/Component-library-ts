import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

const repeatErrorMessage: Array<string> = [] // 用于过滤重复的错误信息
const repeatRequest: Map<string, Function> = new Map() // 用于存储请求，便于取消重复请求
const instance = axios.create({})
const CancelToken = axios.CancelToken // axios 用于取消重复请求
const controller = new AbortController() // Axios 支持以 fetch API 方式—— AbortController 取消请求
instance.defaults.headers.get.Pragma = 'no-cache';
instance.defaults.headers.get['Cache-Control'] = 'no-cache, no-store'; // 禁止请求缓存
instance.defaults.headers.get['Content-Type'] = 'application/json' // get请求默认请求头
/**
 *  application/x-www-form-urlencoded （ post请求，后端接收参数格式为 Form(表单) ）
 *  application/json （ post请求，后端参数格式为 JSON ）
 */
instance.defaults.headers.post['Content-Type'] = 'application/json'  // post请求默认请求头信息
instance.defaults.timeout = 60000 // 请求超时时间 10s
instance.defaults.baseURL = "http://localhost:4001/" // 默认请求地址

function handleRequestConfig(config: AxiosRequestConfig): string {
  let str: string = ""
  str = `
    ${config.method}&
    ${config.url}&
    ${config.data
      ? JSON.stringify(config.data)
      : config.params
        ? JSON.stringify(config.params)
        : JSON.stringify(config.params)}
  `
  if (str.charAt(str.length - 1).includes('&')) {
    str = str.slice(0, str.length - 1)
  }
  return str
}
function removeRepeatRequest(config: AxiosRequestConfig) {

}

instance.interceptors.request.use( // 请求拦截
  (config: AxiosRequestConfig) => {
    const token = window.localStorage.getItem('token')
    if (token) config.headers!.Authorization = `Bearer ${token}`
    if (config.method?.toLowerCase() === 'post') {
      config.data = qs.stringify(config.data)
    }
    removeRepeatRequest(config)
    config.cancelToken = new CancelToken((c) => {
      repeatRequest.set(handleRequestConfig(config), c)
    })
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use( // 响应拦截
  (response) => {

  },
  (error) => {

  }
)
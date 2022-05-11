
export type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream' // 响应体类型

export type AxiosRequestMethod = "GET" | "POST" | "DELETE" | "PUI" // 请求类型

export type message = 'success' | 'error'

export interface AxiosResponseData<T = any> { // 相应内容
  code: number;
  message: string;
  type: message,
  data: T
}
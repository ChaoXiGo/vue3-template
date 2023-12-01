import { useMemberStore } from '@/stores/modules/member'

const baseUrl = 'xxx'

// 添加拦截器
const HttpInterceptor = {
  // 拦截器前触发
  invoke(options: UniApp.RequestOptions) {
    // 不是已http开头拼接路径
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    options.timeout = 10000
    //  添加请求头
    options.header = {
      // 使用已设置的options设置
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    // 每次发送请求时的设置状态
    // console.log(options)
  },
}

uni.addInterceptor('request', HttpInterceptor)
uni.addInterceptor('uploadFile', HttpInterceptor)

// 封装网络请求

// 指定返回结果泛型
interface Data<T> {
  code: String
  msg: String
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            title: res.errMsg || '请求错误',
            icon: 'none',
            mask: true,
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络连接错误',
          icon: 'error',
        })
        reject(err)
      },
    })
  })
}

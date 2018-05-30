/*封装axios*/
import axios from 'axios'
import {message} from 'antd';
/*
默认url地址
如果没有安装webpack，就使用下面这种写法
axios.defaults.baseURL = http://ip:端口
*/
axios.defaults.baseURL = "";
//默认请求超时时间
axios.defaults.timeout = 10000;

/*http request 拦截器*/
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
/*http response 拦截器*/
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          message.error("服务器不见了");
          break;
        default:
          message.error("未知原因");
      }
    }
    return Promise.reject(error);
  }
);
export const get = (url, param) => {
  return (
    axios.get(url)
  )
};

export const post = (url, param) => {
  return (
    axios.post(url, param)
  )
};
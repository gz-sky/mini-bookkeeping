import '@/public/font/iconfont.css'

import Taro, { Component } from '@tarojs/taro'
import Home from './pages/home/index'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/start/index',
      'pages/register/index',
      'pages/record/index',
      'pages/details/index',
      'pages/home/index',
      'pages/user/index',
      'pages/login/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: "#fff",
      borderStyle: 'black',
      selectedColor: '#FF6834',
      color: '#BABABA',
      list: [
        {
          pagePath: 'pages/home/index',
          iconPath: 'public/images/tabbar/home.png',
          selectedIconPath: 'public/images/tabbar/home-active.png'
        },
        {
          pagePath: 'pages/user/index',
          iconPath: 'public/images/tabbar/me.png',
          selectedIconPath: 'public/images/tabbar/me-active.png'
        }
      ]
    },
    cloud: true
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({ env: 'bookkeeping-dev-8r9v8' })
      // if (process.env.NODE_ENV !== 'production') {
      //   Taro.cloud.init({ env: 'bookkeeping-dev-8r9v8' })
      // } else {
      //   Taro.cloud.init({ env: 'bookkeeping-prod-et581' })
      // }
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Home />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

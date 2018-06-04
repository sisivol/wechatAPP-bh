//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');
var util = require('./utils/util.js')
App({

  appData: {
    appId: config.service.appId,
    baseUrl: `${config.service.host}/weapp/`,
  },

  onLaunch(opt) {
    this.appData.opt = opt
    // 展示本地存储能力
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
    qcloud.setLoginUrl(config.service.loginUrl);  //设置登录地址
    
    this.doLogin();
  },
  doLogin() { //登录
    let that = this
    util.showBusy('正在登录');
    qcloud.login({
      success(result) {//此处的result竟然不包含openid,所以res取缓存中的数据
        util.showSuccess('登录成功')
        console.log(config.service.loginUrl);
        let res = wx.getStorageSync('user_info_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A');
        if (that.userInfoReadyCallback) {
          that.userInfoReadyCallback(res)
        }
      },
      fail(error) {
        util.showModel('登录失败', error);
      }
    });
  },
  pageGetUserInfo(page, openIdReadyCallback) { //在page中获取用户信息
    const userInfo = wx.getStorageSync('user_info_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A')
    if (userInfo) {
      page.setData({
        userInfo,
        openId: userInfo.openId
      })
      this.appData.openId = userInfo.openId
      if (openIdReadyCallback) {
        openIdReadyCallback(userInfo.openId)
      }
    } else {
      this.userInfoReadyCallback = (userInfo) => {  //获取用户信息后的回调函数
        page.setData({  //每个page都会自动存储userInfo和openId
          userInfo,
          openId: userInfo.openId
        })
        if (openIdReadyCallback) {  //如果设置了openid的回调函数，则调用回调
          openIdReadyCallback(userInfo.openId)
        }
      }
    }
  },
  globalData: {
    userInfo: null,
    currentLocation: ''
  }
})
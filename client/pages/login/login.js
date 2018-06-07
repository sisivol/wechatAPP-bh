// pages/login/login.js
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var config = require('../../config');
var util = require('../../utils/util.js')
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  bindGetUserInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码
    this.doLogin();
    //最后，记得返回刚才的页面
    wx.navigateBack({
      delta: 1
    })
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
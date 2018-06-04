"use strict";
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp();

Page({
  data: {
    userInfo: {},
    balance:0,
    coin:0
  },


  toOrder: function () {
    console.log(this.data.userInfo)
    wx.navigateTo({
      url: '../order/order',
    })
  },

  onLoad: function (options) {
    var that = this;
    app.pageGetUserInfo(this)
    //设置用户信息
    this.getBalance()
  },

  getBalance:function(){
    qcloud.request({
      login: false,
      url: app.appData.baseUrl + 'getBlance',
      data: {
        openId: this.data.userInfo.openId
      },
      success: (res) => {
        this.setData({
          balance: res.data.balance,
          coin: res.data.coin
        })
        console.lo
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
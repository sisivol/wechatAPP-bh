var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    isLike: true,
    missionDetail: {},
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    title: '',
    price: '',
    publisher_id: '',
    detail: '',
    userInfo: {},
    openId: '',
    id: ''
  },

  setTitle: function () {
    wx.setNavigationBarTitle({
      title: '任务详情',
    })
  },

  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    this.data.id = options.id;
    if (options) {
      qcloud.request({
        login: false,
        url: app.appData.baseUrl + 'getMissionDetail',
        data: {
          id: options.id
        },
        success: (res) => {
          this.setData({
            missionDetail: res.data.data,
            title: res.data.data.title,
            price: res.data.data.price,
            publisher_id: res.data.data.publisher_id,
            detail: res.data.data.detail
          })
          console.log(this.data.missionDetail)
        }
      })
    }
    app.pageGetUserInfo(this)
  },





  // 立即领取任务
  immeGet() {
    /*wx.showToast({
      title: '成功领取任务',
      icon: 'success',
      duration: 2000
    });*/
    qcloud.request({
      login: false,
      url: app.appData.baseUrl + 'receiveMission',
      data: {
        id: this.data.id,
        openid: this.data.openId
      },
      success: (res) => {
        console.log(res.data.data)
      }
    })
  wx.navigateBack({
    
  })
  },
})
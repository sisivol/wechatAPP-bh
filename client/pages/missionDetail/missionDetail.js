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
    publisher: '',
    detail: '',
    userInfo: {},
    openId: '',
    id: '',
    num_of_people:1,
    avatarUrl:'',
    publish_time:null
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
            missionDetail: res.data.data[0],
            title: res.data.data[0].title,
            price: res.data.data[0].price,
            publisher:JSON.parse(res.data.data[1].user_info).nickName,
            detail: res.data.data[0].detail,
            num_of_people: res.data.data[0].num_of_people,
            avatarUrl: JSON.parse(res.data.data[1].user_info).avatarUrl,
            publish_time:util.formatTime(new Date(Date.parse(res.data.data[0].publish_time)))
          })
          console.log(this.data.missionDetail)
          console.log(this.data.publish_time)
        }
      })
    }
    //this.data.publish_time = 
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
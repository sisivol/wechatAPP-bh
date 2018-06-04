//index.js
//获取应用实例

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()

Page({
  data: {
    address: "",
    src: "",
    motto: 'Hello 赏金猎人',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    localImg:[
      '../../image/banner/1.png',
      '../../image/banner/2.jpg',
      '../../image/banner/3.jpg',
    ]
  },

  onShow:function(options){
    var location=app.globalData.currentLocation;
    var that=this;
    if(location != null && location != '')
    that.setData({
      address:location
    })
  },
  getMissionData() {
    const that = this
    qcloud.request({
      login: false,
      url: app.appData.baseUrl + 'getMissionData',
      data: {

      },
      success: (res) => {
        this.setData({
          missionData: res.data.data,
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    /*判断是第一次加载还是从position页面返回
    如果从position页面返回，会传递用户选择的地点*/
    this.getMissionData();
    if (options.address != null && options.address != '') {
      //设置变量 address 的值
      this.setData({
        address: currentLocation
      });
    } else {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        //此key需要用户自己申请
        key: 'QJ7BZ-KNPWP-3VTDM-VA4UO-V4TGF-KWFRB'
      });
      var that = this;
      // 调用接口
      qqmapsdk.reverseGeocoder({
        success: function (res) {
          that.setData({
            address: res.result.address
          });
        },
        fail: function (res) {
          //console.log(res);
        },
        complete: function (res) {
          //console.log(res);
        }
      });
    }
  },

  onChangeAddress: function (e) {
    wx.navigateTo({
      url: "/pages/position/position"
    });
  }
})

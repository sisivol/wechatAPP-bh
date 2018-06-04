var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
var app = getApp();
Page({
  data: {
    latitude: 0,//地图初次加载时的纬度坐标
    longitude: 0, //地图初次加载时的经度坐标
    name: "" //选择的位置名称
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'QJ7BZ-KNPWP-3VTDM-VA4UO-V4TGF-KWFRB'
    });

    this.moveToLocation();
  },
  //移动选点
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res.name);
        app.globalData.currentLocation = res.name
        //选择地点之后返回到原来页面
        wx.switchTab({
          url: '../../pages/index/index',
        });
      },
      fail: function (err) {
        wx.switchTab({
          url: '../../pages/index/index',
        });
      }
    });
  }
});
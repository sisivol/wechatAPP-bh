var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp();
// pages/missionCenter/missionCenter.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nztype: -1,
    missionData: [],
    flag: 0,
    flag2: 0,
    flag3: "",
    content: [],
    nv: [],
    px: [],
    qyopen: false,
    qyshow: false,
    nzopen: false,
    pxopen: false,
    nzshow: false,
    pxshow: false,
    isfull: false,
    select1: '',
    select2: '',
    shownavindex: '',
    arrayNum: [1, 2, 3, 4],
    arrayTask: ['买早餐', '买中餐', '买晚餐', '买夜宵'],
    icon: ["", "", "", ""]
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.pageGetUserInfo(this)
    this.getMissionData();
    //Thread.sleep(5000);  
    let missionlength = this.data.missionData.length
    //missionlength=6
    this.setData({
      nv: ['全部', '种类1', '种类2'],
      px: ['时间', '价格', '人数']
    })
    for (let i = 0; i < missionlength; i++) {
      var icon2 = "../../image/" + this.data.missionData[i].sort_id + ".png"
      var newData = { flag: true };
      this.data.missionData[i].push(newData);
      console.log(icon2)
      this.setData({
        [`icon[${i}]`]: icon2
      })
    }
  },
  move: function (e) {
    console.log(this.data.missionData)
  },
  listqy: function (e) {
    if (this.data.qyopen) {
      this.setData({
        qyopen: false,
        nzopen: false,
        pxopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        pxopen: false,
        nzopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  list: function (e) {
    if (this.data.nzopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.nv,
        nzopen: true,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listnz2: function (e) {
    var $id = e.currentTarget.dataset.id;
    this.setData({
      nzopen: false,
      pxopen: false,
      qyopen: false,
      nzshow: false,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0,
      flag: e.currentTarget.id
    })
  },
  sortBy: function () {
    //第二个参数没有传递 默认升序排列
    var attr = this.data.flag3
    return function (a, b) {
      a = a[attr];
      b = b[attr];
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  },
  listpx2: function (e) {
    var $id = e.currentTarget.dataset.id;
    this.setData({
      nzopen: false,
      pxopen: false,
      qyopen: false,
      nzshow: true,
      pxshow: false,
      qyshow: true,
      isfull: false,
      shownavindex: 0,
      flag2: e.currentTarget.id
    })
    console.log(this.data.flag2);
    let a = this.data.flag2
    if (a == 0) {
      this.setData({
        flag3: "id"
      })
    }
    if (a == 1) {
      this.setData({
        flag3: "price"
      })
    }
    if (a == 2) {
      this.setData({
        flag3: "num_of_people"
      })
    }
    var arr = this.data.missionData
    console.log(arr.sort(this.sortBy()))
    console.log(arr);
    this.setData({
      missionData: this.data.missionData.sort(this.sortBy())
    })
  },
  listpx: function (e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.px,
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },

  selectleft: function (e) {

    this.setData({
      cityright: {},
      citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: ''
    });
  },
  selectcenter: function (e) {

    this.setData({
      cityright: this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.city
    });
  },
  hidebg: function (e) {

    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getMissionData();
    console.log(this.data.missionData)
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
    this.getMissionData();
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
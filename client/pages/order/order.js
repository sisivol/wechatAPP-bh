var postsData = require('../../data/post-data.js')
var app = getApp()
Page({
  data: {
    curNav:1,
    currentTab: 0
  },

  // 导航切换监听
  // navbarTap: function (e) {
  //   console.debug(e);
  //   this.setData({
  //     currentTab: e.currentTarget.dataset.idx
  //   })
  // },

  //事件处理函数  
  switchTab: function (e) {
    // 获取item项的id，和数组的下标值  
    console.debug(e);
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      currentTab: index,
    })
  },

  onLoad:function(options){
    this.setData({
      posts_key: postsData.postList,
    });
  }

}) 
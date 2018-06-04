Page({
  data: {
    isLike: true,
     
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

  },

setTitle:function(){
  wx.setNavigationBarTitle({
    title: '任务详情',
  })
},

onLoad:function(options){
  //页面初始化 options为页面跳转所带来的参数
  var post_content={
    title:"买午餐",
    price:"2.00",
    num_of_people:"1",
    default_image:"../images/weixin.jpg",
    image:"../images/lunch.jpg",
    publisher_id:"001",
    publish_time:"2018-06-01",
    detail:"在南苑食堂买午餐",
  }
  this.setData(post_content);
},

  // 立即领取任务
  immeGet() {
    wx.showToast({
      title: '成功领取任务',
      icon: 'success',
      duration: 2000
    });
  },
})
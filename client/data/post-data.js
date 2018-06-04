

var local_database = [
  {
    id: 0,
    name: "全部",
    ishaveChild: true,
    children: [
      {
        child_id: 1,
        image: "../../image/1.png",
        title: "买午餐1",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 2,
        image: "../../image/1.png",
        title: "买午餐2",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 3,
        image: "../../image/1.png",
        title: "买午餐3",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 4,
        image: "../../image/1.png",
        title: "买午餐4",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 5,
        image: "../../image/1.png",
        title: "买午餐5",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 6,
        image: "../../image/1.png",
        title: "买午餐6",
        price: "2.00",
        publish_time: "2018-06-01",
      }
    ]
  },
  {
    id: 1,
    name: "进行中",
    ishaveChild: true,
    children: [
      {
        child_id: 1,
        image: "../../image/1.png",
        title: "买午餐1",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 2,
        image: "../../image/1.png",
        title: "买午餐2",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 3,
        image: "../../image/1.png",
        title: "买午餐3",
        price: "2.00",
        publish_time: "2018-06-01",
      }
    ]
  },
  {
    id: 2,
    name: "已完成",
    ishaveChild: true,
    children: [
      {
        child_id: 1,
        image: "../../image/1.png",
        title: "买午餐4",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 2,
        image: "../../image/1.png",
        title: "买午餐5",
        price: "2.00",
        publish_time: "2018-06-01",
      },
      {
        child_id: 3,
        image: "../../image/1.png",
        title: "买午餐6",
        price: "2.00",
        publish_time: "2018-06-01",
      }
    ]
  },
  {
    id: 3,
    name: "已发布",
    ishaveChild: false,
    children: []
  },
]

module.exports = {
  postList: local_database
}
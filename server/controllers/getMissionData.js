module.exports = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState === 1) {
    //const query = ctx.query
    const { mysql } = require('../qcloud')
    let arr = await mysql('missionTable').where({ status: 0 }).select('id','sort_id', 'title', 'price', 'num_of_people')
    /*let arr = []
    res2.forEach(function (val, i) {
      let value = JSON.parse(val.user_info)
      value.score = val.score
      arr[i] = value
    })
    function hashRemoveRepeat(arr) {  //去重函数
      var hash = {},
        len = arr.length,
        result = [];
      for (var i = 0; i < len; i++) {
        if (!hash[arr[i].openId]) {
          hash[arr[i].openId] = true;
          result.push(arr[i]);
        }
      }
      return result;
    }
    arr = hashRemoveRepeat(arr)
    */
    arr.sort(function (a, b) {
      return b.id - a.id
    })
    ctx.state.data = arr;
  } else {
    ctx.state.code = -1
  }
}
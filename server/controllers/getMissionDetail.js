module.exports = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState === 1) {
    const query = ctx.query
    const { mysql } = require('../qcloud')
    let arr1 = await mysql('missionTable').where({ id: query.id }).select('title', 'price', 'num_of_people', 'detail', 'status', 'publisher_id','publish_time')
    let arr2 = await mysql('cSessionInfo').where({ open_id: arr1[0].publisher_id }).select('user_info')
    let arr = arr1.concat(arr2);
    if (arr[0].status != 0) {
      ctx.state.data = 9

    } else {
      ctx.state.data = arr;
    }
  } else {
    ctx.state.code = -1
  }
}
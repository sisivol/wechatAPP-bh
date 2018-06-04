module.exports = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState === 1) {
    const query = ctx.query
    const { mysql } = require('../qcloud')
    let arr = await mysql('missionTable').where({ id: query.id }).select('status')
    if (arr[0].status != 0) {
      ctx.state.data = 9
    }
    else {
      let arr1 = await mysql('missionTable').where({ id: query.id }).update({ status: 1, receiver_id: query.openid })
      ctx.state.data = arr1[0];
    }
  } else {
    ctx.state.code = -1
  }
}
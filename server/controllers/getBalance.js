module.exports = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState === 1) {
    const { mysql } = require('../qcloud')
    let arr = await mysql('cSessionInfo').where({open_id: ctx.query.openId}).select('balance','coin')
    ctx.state.data = arr;
  } else {
    ctx.state.code = -1
  }
}
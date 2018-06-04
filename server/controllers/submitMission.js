module.exports = async (ctx, next) => {
if (ctx.state.$wxInfo.loginState === 1) {
  const data = ctx.request.body
  const { mysql } = require('../qcloud')
  let res = await mysql('missionTable').insert({ sort_id: 1, title: data.title, detail: data.detail, price: data.price, num_of_people: data.num_of_people, publisher_id: data.openId})
  ctx.state.data = res
} else {
 ctx.state.code = -1
}

}
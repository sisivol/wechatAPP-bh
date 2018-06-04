module.exports = async (ctx, next) => {
  if (ctx.state.$wxInfo.loginState === 1) {
    const query = ctx.query
    const { mysql } = require('../qcloud')
    let arr = await mysql('missionTable').where({ id: query.id }).select('title', 'price', 'num_of_people','detail','status','publisher_id')

    if (arr[0].status !=0) {
      ctx.state.data = 9
      
    }else{
      ctx.state.data = arr[0];
    }
  } else {
    ctx.state.code = -1
  }
}
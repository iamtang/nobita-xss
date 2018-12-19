module.exports = async (ctx, next) => {
  if (ctx.config.xss) {
    let body = Object.assign({}, ctx.request.body);
    let query = Object.assign({}, ctx.query);
    if(body){
      ctx.request.body = JSON.parse(JSON.stringify(body).replace(/\</g, '&lt;').replace(/\</g, '&gt;'));
    }
    if(query){
      ctx.query = JSON.parse(JSON.stringify(query).replace(/\</g, '&lt;').replace(/\</g, '&gt;'));
    }
  }
  await next();
}

module.exports = async (ctx, next) => {
  ctx.request.body = ctx.request.body && JSON.parse(JSON.stringify(ctx.request.body).replace(/\</g, '&lt;').replace(/\</g, '&gt;'));
  ctx.query = ctx.query && JSON.parse(JSON.stringify(ctx.query).replace(/\</g, '&lt;').replace(/\</g, '&gt;'));
  await next();
}

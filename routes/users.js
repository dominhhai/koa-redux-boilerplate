import koaRouter from 'koa-router'

const router = koaRouter()

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!'
})

module.exports = router

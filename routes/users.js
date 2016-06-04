import koaRouter from 'koa-router'

const router = koaRouter()

router.get('/', (ctx, next) => {
  ctx.body = 'this a users response!'
})

module.exports = router

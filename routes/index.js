import koaRouter from 'koa-router'

const router = koaRouter()

router.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'Welcome to Koa'
  }

  await ctx.render('index')
})

module.exports = router

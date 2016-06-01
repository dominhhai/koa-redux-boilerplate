import koaRouter from 'koa-router'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../views/common/store/configureStore'
import App from '../views/common/containers/App'

const router = koaRouter()

router.get('/', async function (ctx, next) {
  const store = configureStore({})
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  ctx.state = {
    title: 'Welcome to Koa',
    html: html
  }

  await ctx.render('index', {})
})

module.exports = router

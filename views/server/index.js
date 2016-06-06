import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import Layout from './layout'
import App from '../common/components/App'

const store = configureStore()

export default (props) => (
  <Layout {...props}>
    <h1>{ props.title }</h1>
    <p>React Welcome to Koa</p>
    <div id="app">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </Layout>
)

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'

const store = configureStore({})

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

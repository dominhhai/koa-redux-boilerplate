import React from 'react'

export default (props) => (
  <html>
    <head>
      <title>{ props.title }</title>
      <link rel='stylesheet' href='/css/style.css' />
    </head>
    <body>
      { props.children }
      <script src="/js/bundle.js"></script>
    </body>
  </html>
)

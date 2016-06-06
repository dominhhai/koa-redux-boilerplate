import React from 'react'

export default (props) => (
  <html>
    <head>
      <title>{ props.title }</title>
      <link rel='stylesheet' href='/css/style.css' />
      <link rel='stylesheet' href='/js/bundle.css' />
    </head>
    <body>
      { props.children }
      <script src="/js/bundle.js"></script>
    </body>
  </html>
)

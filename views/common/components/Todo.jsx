import React from 'react'

export default ({text, completed, onClick, onDoubleClick}) => (
  <li onClick={onClick}
  onDoubleClick={onDoubleClick}
  style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}>{text}</li>
)

import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'antd'
import Search from './components/Search'


ReactDOM.render(
  <div style={{ width: 500 }}>

    <Icon
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        display: 'block',
        fontSize: 60,
      }}
      type="book"
      theme="filled"
    />


    <Search style={{
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
    }}
    />
  </div>,
  document.getElementById('app'),
)

import React from 'react'
import { render } from 'react-dom'

import Home from './Home'


var div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div)

render(
    <Home/>,
    document.getElementById('root')
)

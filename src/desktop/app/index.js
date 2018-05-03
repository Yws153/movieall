import React from 'react'
import { render } from 'react-dom'

// import { Home } from 'app/containers'


var div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div)

render(
    <div>23234</div>,
    document.getElementById('root')
)

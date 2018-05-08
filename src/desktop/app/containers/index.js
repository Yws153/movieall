import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { customStore } from 'app/utils'
import Reducers from 'app/reducers'
import CreateRouter from 'app/containers/router.js'

let store = customStore(Reducers)

ReactDOM.render(
    <Provider store={store}>
        <CreateRouter />
    </Provider>,
    document.getElementById('root')
)

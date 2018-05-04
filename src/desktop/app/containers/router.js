import React from 'react'
import { Router, Route, Link } from 'react-router-dom'

import createHistory from 'history/createHashHistory'
const history = createHistory()
const location = history.location

import Home from './Home'
// import Cxpz from './Cxpz'

const CreateRouter = () => (
    <Router history={history}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cxpz">Cxpz</Link></li>
            </ul>
            <Route path="/" exact component={Home} />
            <Route path="/cxpz" component={(nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./Cxpz').default)
                })
            }}
            />
        </div>
    </Router>
)

export default CreateRouter

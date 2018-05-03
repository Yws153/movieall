import React from 'react'
import {  Router, Route } from 'react-router-dom'

import createHistory from 'history/createHashHistory'
const history = createHistory()
const location = history.location

import Home from './Home'
import Cxpz from './Cxpz'

// import Detail from './Detail'

const CreateRouter = () => (
    <Router history={history}>
        <div>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/detail">Detail</Link></li>
            </ul> */}
            <Route path="/" exact component={Home} />
            <Route path="/cxpz" component={Cxpz} />
        </div>
    </Router>
)

export default CreateRouter

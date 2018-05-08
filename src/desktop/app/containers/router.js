import React from 'react'
// import { Router, Route, Link } from 'react-router-dom'
import { Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import asyncComponent from './AsyncComponent'
import { Breadcrumb, Alert } from 'antd'

import createHistory from 'history/createHashHistory'
const history = createHistory()
const location = history.location

import Home from './Home'
const Voucher = asyncComponent('Voucher')


const CreateRouter = () => (
    <Router history={history}>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/voucher">凭证</Link></li>
            </ul>

            <Switch>
                <Route path="/voucher" component={Voucher} />
                <Route component={Home} />
            </Switch>
            {/*
            <Route path="/voucher" component={Voucher}/> */}
        </div>
    </Router>
)

export default CreateRouter



// const LrModule = () => (
//     <ul>
//         <li>
//             <Link to="/lr/pz">凭证</Link>
//             <Link to="/lr/ls">流水账</Link>
//         </li>
//     </ul>
// )
//
// const CxModule = () => (
//     <ul>
//         <li>
//             <Link to="/cx/pz">凭证</Link>
//             <Link to="/cx/ls">流水账</Link>
//         </li>
//     </ul>
// )
//
// const breadcrumbNameMap = {
//   '/apps': 'Application List',
//   '/apps/1': 'Application1',
//   '/apps/2': 'Application2',
//   '/apps/1/detail': 'Detail2',
//   '/apps/2/detail': 'Detail3'
// }
//
// const Home = withRouter((props) => {
//
//     const { location } = props
//     const pathSnippets = location.pathname.split('/').filter(i => i)
//
//     const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//         const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
//         return (
//             <Breadcrumb.Item key={url}>
//                 <Link to={url}>
//                     {breadcrumbNameMap[url]}
//                 </Link>
//             </Breadcrumb.Item>
//         )
//     })
//     const breadcrumbItems = [(
//         <Breadcrumb.Item key="home">
//             <Link to="/">Home</Link>
//         </Breadcrumb.Item>
//     )].concat(extraBreadcrumbItems)
//
//     return (
//         <div className="demo">
//             <div className="demo-nav">
//                 <Link to="/">首页</Link>
//                 <Link to="/lr">录入</Link>
//                 <Link to="/cx">查询</Link>
//                 <Link to="/ye">余额</Link>
//                 <Link to="/mx">明细</Link>
//                 <Link to="/sz">设置</Link>
//             </div>
//             <Switch>
//                 <Route path="/lr" component={LrModule} />
//                 <Route path="/cx" component={CxModule} />
//                 <Route render={() => <span>Home Page</span>} />
//             </Switch>
//             <Switch>
//                 <Route path="/lr/pz" component={Lrpz} />
//                 <Route path="/lr/ls" component={Lrls} />
//             </Switch>
//             <Switch>
//                 <Route path="/cx/pz" component={Cxpz} />
//                 <Route path="/cx/ls" component={Cxls} />
//             </Switch>
//
//         </div>
//     )
// })

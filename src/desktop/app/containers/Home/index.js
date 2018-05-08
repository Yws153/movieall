import React from 'react'
import { connect }	from 'react-redux'
import { fromJS } from 'immutable'
import * as homeActions from 'app/actions/Home/home.action.js'
import asyncComponent from '../AsyncComponent'

import { Button, Tabs } from 'antd'
const TabPane = Tabs.TabPane
import 'antd/dist/antd.css'

import './index.scss'

@connect(state => state)
export default
class Home extends React.Component {

	render() {
		const { dispatch, homeState, history } = this.props

		const panes = homeState.get('panes')
		const homeActiveKey = homeState.get('homeActiveKey')

		return (
			<div>
				<ul>
	                <li onClick={() => dispatch(homeActions.addHomeTabpane('Home'))}>Home</li>

	                <li onClick={() => dispatch(homeActions.addHomeTabpane('Cxpz'))}>Cxpz</li>
					<li onClick={() => dispatch(homeActions.addHomeTabpane('Lrb'))}>Report</li>
	            </ul>

				<Tabs
					hideAdd
					type="editable-card"
					onChange={(key) => dispatch(homeActions.addHomeTabpane(key))}
					activeKey={homeActiveKey}
					onEdit={(targetKey, action) => {

						if (action === 'remove') {
							dispatch(homeActions.removeHomeTabpane(targetKey))
						}

					}}>
					{panes.map(v => {
						const Component = v.get('key') === 'Home' ? v.get('content') : asyncComponent(`Home/${v.get('key')}`)
						return <TabPane tab={v.get('title')} key={v.get('key')} closable={v.get('closable')}>{
							v.get('key') === 'Home' ?
							v.get('content') :
							<Component/>
						}</TabPane>
					})}
				</Tabs>
			</div>
		)
	}
}

import React from 'react'
import { connect }	from 'react-redux'
import { fromJS } from 'immutable'
import * as homeActions from 'app/actions/Voucher/home.action.js'
import voucherAsyncComponent from './VoucherAsyncComponent'

import { Button, Tabs } from 'antd'
const TabPane = Tabs.TabPane
import 'antd/dist/antd.css'

import './index.scss'

@connect(state => state)
export default
class Voucher extends React.Component {

	render() {
		const { dispatch, voucherState, history } = this.props

		const panes = voucherState.get('panes')
		const homeActiveKey = voucherState.get('homeActiveKey')

		return (
			<div>
			 	{/* wer */}
				<ul>
	                <li onClick={() => dispatch(homeActions.addHomeTabpane('Home'))}>Home</li>
	                <li onClick={() => dispatch(homeActions.addHomeTabpane('Cxpz'))}>Cxpz</li>
					<li onClick={() => dispatch(homeActions.addHomeTabpane('Lrb'))}>Report</li>
	            </ul>

				{/* fgf */}
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
						const Component = v.get('key') === 'Home' ? v.get('content') : voucherAsyncComponent(`Voucher/${v.get('key')}`)
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

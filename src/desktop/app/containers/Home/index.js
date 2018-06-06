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

		const a = {}

		const b = {}

		const comparison = (a, b) => {

			console.log(typeof a);
			console.log(typeof b);

			const typeOfOne = typeof a
			const typeOfTwo = typeof b

			let result = {}

			if (typeOfOne === typeOfTwo) { // 传入的操作数的类型相同

				if (typeOfOne === 'undefined' || typeOfOne === 'boolean' || typeOfOne === 'number' || typeOfOne === 'string') { // 类型为 Null 或者 其他任何其他对象
					// 除 null 的基础类型 直接对比值
					if (a === b) {
						return result = {
							match: true,
							message: ''
						}
					} else {
						return result = {
							match: false,
							message: `${a} 与 ${b} 不匹配`
						}
					}
				} else if (typeOfOne === 'symbol') {
					return result = {
						match: false,
						message: `symbol 未做匹配`
					}
				} else if (typeOfOne === 'function') {
					return result = {
						match: false,
						message: `function 未做匹配`
					}
				} else if (typeOfOne === 'object') {
					if (a !== null && b !== null) {






					} else {
						if (a === b) {
							return result = {
								match: true,
								message: ''
							}
						} else {
							return result = {
								match: false,
								message: `${a} ${b}类型不匹配`
							}
						}
					}
				}

			} else { // 第一层的类型不同
				result = {
					match: false,
					message: `${typeOfOne} ${typeOfTwo}类型不匹配`
				}
				return result
			}
		}

		const result = comparison(a, b)

		console.log(result);

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

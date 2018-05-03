import React from 'react'
import { connect }	from 'react-redux'
import * as homeActions from 'app/actions/home.action.js'
import './index.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'
// import { Link, } from 'react-router-dom'

@connect(state => state)
export default
class Home extends React.Component {
	// componentDidMount() {
	// }
	// shouldComponentUpdate(nextprops) {
	// 	return this.props.homeState != nextprops.homeState
	// }

	render() {
		const { dispatch, homeState, history } = this.props

		console.log('issuedate', homeState.get('issuedate'));

		return (
			<div className="color">
				huhu00000707
				<span onClick={() => history.push('/cxpz')}>cxv</span>

				<div onClick={() => dispatch(homeActions.addTodo())}>
					切换
				</div>

				<Button type="primary">Primary</Button>
			</div>
		)
	}
}

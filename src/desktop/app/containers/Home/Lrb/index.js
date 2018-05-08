import React from 'react'
import { connect }	from 'react-redux'
// import * as homeActions from 'app/actions/home.action.js'
import { Button } from 'antd'

console.log('加载利润表');

@connect(state => state)

class Lrb extends React.Component {
	// componentDidMount() {
	// }
	// shouldComponentUpdate(nextprops) {
	// 	return this.props.homeState != nextprops.homeState
	// }

	render() {
		const { dispatch, homeState } = this.props

		console.log('issuedate', homeState.get('issuedate'));

		return (
			<div className="color">
				利润表
			</div>
		)
	}
}

module.exports = Lrb

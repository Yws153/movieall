import React from 'react'
import { connect }	from 'react-redux'
// import * as homeActions from 'app/actions/home.action.js'
import { Button } from 'antd'

@connect(state => state)

class Lrls extends React.Component {
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
				录入流水
				{/* <Button type="primary">Primary</Button> */}
			</div>
		)
	}
}

module.exports = Lrls

import { fromJS }	from 'immutable'

import * as ActionTypes	from './ActionTypes.js'

//生产环境应当设置为空
const homeState = fromJS({
	issuedate: '345'
})

export default function handleHome(state = homeState, action) {
	return ({
		[ActionTypes.ADD_TODO]			: () => state.set('issuedate', 1)

	}[action.type] || (() => state))()
}

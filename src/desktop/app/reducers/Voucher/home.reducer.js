import { fromJS }	from 'immutable'

import * as ActionTypes	from './ActionTypes.js'

import tabNames from './tabNames.js'

//生产环境应当设置为空
const voucherState = fromJS({
	issuedate: '345',
	panes: [{ key: 'Home', title: '首页', content: '首页', closable: false }],
	homeActiveKey: 'Home'
})

export default function handleHome(state = voucherState, action) {
	return ({
		[ActionTypes.ADD_VOUCHER_TAB_PANE]	   : () => {

			let panes = state.get('panes')

			if (panes.some(v => v.get('key') === action.tabKey)) {  // 存在 切换
				state = state.set('homeActiveKey', action.tabKey)
			} else {  // 不存在 新增
				panes = panes.push(fromJS({ title: tabNames[action.tabKey], key: action.tabKey }))
				state = state.set('homeActiveKey', action.tabKey).set('panes', panes)
			}
			return state
		},
		[ActionTypes.REMOVE_VOUCHER_TAB_PANE] : () => {

			// 移除
			state = state.update('panes', v => v.filter(w => w.get('key') !== action.tabKey))

			// 默认为最后一个
			const defaultActiveTabkey = state.get('panes').last().get('key')

			if (action.activeTabkey) {  //传入关闭后打开的tab页
				state = state.set('homeActiveKey', panes.some(v => v.get('key') === action.activeTabkey) ? action.activeTabkey : defaultActiveTabkey)
			} else {
				state = state.set('homeActiveKey', defaultActiveTabkey)
			}
			return state
		}

	}[action.type] || (() => state))()
}

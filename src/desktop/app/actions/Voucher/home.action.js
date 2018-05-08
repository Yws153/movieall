import * as ActionTypes from 'app/reducers/Voucher/ActionTypes'


export const addHomeTabpane = (tabKey) => ({
    type: ActionTypes.ADD_VOUCHER_TAB_PANE,
    tabKey
})

export const removeHomeTabpane = (tabKey) => ({
    type: ActionTypes.REMOVE_VOUCHER_TAB_PANE,
    tabKey
})

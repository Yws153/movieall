import * as ActionTypes from 'app/reducers/Home/ActionTypes'

export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    text
})

export const addHomeTabpane = (tabKey) => ({
    type: ActionTypes.ADD_HOME_TAB_PANE,
    tabKey
})

export const removeHomeTabpane = (tabKey) => ({
    type: ActionTypes.REMOVE_HOME_TAB_PANE,
    tabKey
})

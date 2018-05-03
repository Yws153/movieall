import * as ActionTypes from 'app/reducers/HomeReducer/ActionTypes'

export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    text
})

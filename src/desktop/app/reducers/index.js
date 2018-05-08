import { combineReducers } from 'redux'

import homeState from './Home/home.reducer'
import voucherState from './Voucher/home.reducer'

export default combineReducers({
    homeState,
    voucherState
})

import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as indexReducer} from '../pages/index/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'
const reducer = combineReducers({
    header:headerReducer,
    index:indexReducer,
    detail:detailReducer,
    login:loginReducer
})
export default reducer
import { combineReducers } from 'redux'

import appReducer from './appReducer'

const rootReducer = combineReducers({
    proj:appReducer,
})

export default rootReducer;
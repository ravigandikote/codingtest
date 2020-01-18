/**
 * Root reducer that combines all the reducers present in the App & encapsulates the Store data into Immutable object.
 */

import { fromJS } from 'immutable'
import appReducer from './appReducer'

export default (state, action) => {
  return fromJS({
    app: appReducer(state.get('app'), action)
  })
}

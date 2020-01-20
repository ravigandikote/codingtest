/**
 * App config reducer to handle the global config api responses.
 */

import { GET_SEARCH_RESULTS, GET_SEARCH_TAGS } from 'config/Constants'

const initState = {
  results: null,
  tags: null,
  resultsFail: false,
  tagsFail: false
}

const SUCCESS = '_SUCCESS'
const FAIL = '_FAIL'

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS + SUCCESS:
      return state.set('results', action.payload ? action.payload.response : {})

    case GET_SEARCH_RESULTS + FAIL:
      state = state.set('resultsFail', true)
      return state.set('results', null)

    case GET_SEARCH_TAGS + SUCCESS:
      return state.set('tags', action.payload ? action.payload.response : {})

    case GET_SEARCH_TAGS + FAIL:
      state = state.set('tagsFail', true)
      return state.set('tags', null)
    default:
      return state
  }
}

export default appReducer

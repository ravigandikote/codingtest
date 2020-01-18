/**
 * App config action to handle the global config api.
 */

import { makeRequestActionCreator } from '../../utils/redux'

export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'
export const getSearchResults = searchObj => dispatch => {
  const request = makeRequestActionCreator(GET_SEARCH_RESULTS, searchObj)

  // Get Search Results
  return dispatch(
    request({
      url:
        `/search?api-key=` +
        process.env.API_KEY +
        `&q=` +
        searchObj.query +
        `&show-fields=thumbnail,headline&page=` +
        searchObj.page +
        `&show-tags=keyword` +
        `&page-size=` +
        searchObj.pageSize
    })
  )
}

export const GET_SEARCH_TAGS = 'GET_SEARCH_TAGS'
export const getSearchTags = searchObj => dispatch => {
  const request = makeRequestActionCreator(GET_SEARCH_TAGS, searchObj)

  // Get Search Results
  return dispatch(
    request({
      url:
        `/tags?api-key=` +
        process.env.API_KEY +
        `&q=` +
        searchObj.query +
        `&show-references=all`
    })
  )
}

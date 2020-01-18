/**
 * Redux store setup.
 * Includes the axios config.
 */
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { fromJS } from 'immutable'

const axiosMiddlewareOptions = {
  interceptors: {
    response: [
      {
        success: ({ getState, dispatch, getSourceAction }, res) => {
          return res.data
        },
        error: ({ getState, dispatch, getSourceAction }, error) => {
          return Promise.reject(error)
        }
      }
    ]
  }
}

const client = axios.create({
  baseURL: process.env.API_BASE_URL,
  responseType: 'json'
})

const initialState = fromJS({})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, axiosMiddleware(client, axiosMiddlewareOptions))
  )
)

export default store

/**
 * Generic Action Creator Factory
 */
export const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = { type }

    argNames.forEach((arg, i) => {
      action[argNames[i]] = args[i]
    })

    return action
  }
}

/**
 * Generic Request Action Creator
 */
export const makeRequestActionCreator = (type, accessToken) => {
  return request => {
    return {
      type,
      payload: {
        request
      }
    }
  }
}

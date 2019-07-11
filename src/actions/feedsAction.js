import * as types from '../constants/types'

//fetch car details from json data
export const getFeeds = () =>
  dispatch =>
    fetch(`feeds.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_FEEDS,
          payload: response.feeds
        })
      })


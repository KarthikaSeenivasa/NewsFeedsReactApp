import * as types from '../constants/types'

const INITIAL_STATE = {
  feeds: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_FEEDS:
      return {
        ...state, feeds: action.payload.map(feed =>
          ({...feed})
        )
      };
   
    default:
      return state
  }
}

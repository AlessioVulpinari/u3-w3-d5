import { SET_SEARCH } from "../Actions"

const initialState = {
  content: "",
}

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state
  }
}

export default searchReducers

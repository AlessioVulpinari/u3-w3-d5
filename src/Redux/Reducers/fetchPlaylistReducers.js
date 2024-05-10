import { ADD_TO_PLAYLIST } from "../Actions"

const initialState = {
  content: [],
}

const fetchSongsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    default:
      return state
  }
}

export default fetchSongsReducers

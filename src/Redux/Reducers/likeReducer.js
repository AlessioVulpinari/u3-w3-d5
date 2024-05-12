import { ADD_LIKE, REMOVE_LIKE } from "../Actions"

const initialState = {
  content: [],
}

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return { ...state, content: [...state.content, action.payload] }

    case REMOVE_LIKE:
      return { ...state, content: state.content.filter((songId) => songId !== action.payload) }

    default:
      return state
  }
}

export default likeReducer

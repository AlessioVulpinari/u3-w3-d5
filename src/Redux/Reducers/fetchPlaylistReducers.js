import { ADD_TO_EMINEM, ADD_TO_PERRY, ADD_TO_PLAYLIST, ADD_TO_QUEEN } from "../Actions"

const initialState = {
  content: [],
  queen: [],
  eminem: [],
  perry: [],
}

const fetchSongsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        content: [...state.content, ...action.payload],
      }

    case ADD_TO_QUEEN:
      return {
        ...state,
        queen: action.payload,
      }

    case ADD_TO_EMINEM:
      return {
        ...state,
        eminem: action.payload,
      }

    case ADD_TO_PERRY:
      return {
        ...state,
        perry: action.payload,
      }

    default:
      return state
  }
}

export default fetchSongsReducers

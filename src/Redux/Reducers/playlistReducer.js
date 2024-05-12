import { ADD_TO_PLAYLIST_1, ADD_TO_PLAYLIST_2 } from "../Actions"

const initialState = {
  playlist1: [],
  playlist2: [],
}

const playlistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST_1:
      return {
        ...state,
        playlist1: [...state.playlist1, action.payload],
      }

    case ADD_TO_PLAYLIST_2:
      return {
        ...state,
        playlist2: [...state.playlist2, action.payload],
      }

    default:
      return state
  }
}

export default playlistsReducer

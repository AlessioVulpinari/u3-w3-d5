import { SET_SELECTED } from "../Actions"

const initialState = {
  selectedSong: null,
}

const selectedSong = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return {
        ...state,
        selectedSong: action.payload,
      }

    default:
      return state
  }
}

export default selectedSong

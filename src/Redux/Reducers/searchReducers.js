import { SET_SEARCH, SET_SEARCH_ERROR_OFF, SET_SEARCH_ERROR_ON, SET_SEARCH_LOADING_OFF, SET_SEARCH_LOADING_ON } from "../Actions"

const initialState = {
  content: "",
  isLoading: false,
  hasError: false,
  errorMsg: "",
}

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        content: action.payload,
      }

    case SET_SEARCH_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      }

    case SET_SEARCH_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      }

    case SET_SEARCH_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMsg: action.payload,
      }

    case SET_SEARCH_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMsg: "",
      }
    default:
      return state
  }
}

export default searchReducers

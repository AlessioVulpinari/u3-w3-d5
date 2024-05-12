export const STRIVE_ENDPOINT = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST"
export const SET_SEARCH = "SET_SEARCH"
export const SET_SEARCH_LOADING_ON = "SET_SEARCH_LOADING_ON"
export const SET_SEARCH_LOADING_OFF = "SET_SEARCH_LOADING_OFF"
export const SET_SEARCH_ERROR_ON = "SET_SEARCH_ERROR_ON"
export const SET_SEARCH_ERROR_OFF = "SET_SEARCH_ERROR_OFF"
export const SET_SELECTED = "SET_SELECTED"
export const ADD_TO_QUEEN = "ADD_TO_QUEEN"
export const ADD_TO_EMINEM = "ADD_TO_EMINEM"
export const ADD_TO_PERRY = "ADD_TO_PERRY"

export const getSongsAction = (artistName, actionType) => {
  return async (dispatch) => {
    try {
      if (actionType === SET_SEARCH) {
        dispatch({ type: SET_SEARCH_ERROR_OFF })
        dispatch({ type: SET_SEARCH_LOADING_ON })
      }
      const response = await fetch(STRIVE_ENDPOINT + artistName)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        if (data.data.length === 0) {
          console.log("Entrato")
          throw new Error("No Songs Founded")
        }
        dispatch({ type: actionType, payload: data.data })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      if (actionType === SET_SEARCH) {
        dispatch({ type: SET_SEARCH_ERROR_ON, payload: error.message })
      }
    } finally {
      if (actionType === SET_SEARCH) {
        dispatch({ type: SET_SEARCH_LOADING_OFF })
      }
    }
  }
}

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import selectedSong from "../Reducers/selectedReducer"
import fetchSongsReducers from "../Reducers/fetchPlaylistReducers"
import searchReducers from "../Reducers/searchReducers"

const rootReducer = combineReducers({
  selected: selectedSong,
  playlist: fetchSongsReducers,
  search: searchReducers,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import selectedSong from "../Reducers/selectedReducer"
import fetchSongsReducers from "../Reducers/fetchPlaylistReducers"
import searchReducers from "../Reducers/searchReducers"
import likeReducer from "../Reducers/likeReducer"
import playlistsReducer from "../Reducers/playlistReducer"

const rootReducer = combineReducers({
  selected: selectedSong,
  playlist: fetchSongsReducers,
  playlists: playlistsReducer,
  search: searchReducers,
  like: likeReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

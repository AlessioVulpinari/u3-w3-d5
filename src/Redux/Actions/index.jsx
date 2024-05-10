import { Col, Row } from "react-bootstrap"

export const STRIVE_ENDPOINT = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST"
export const SET_SEARCH = "SET_SEARCH"

export const albumCard = (song) => {
  return (
    <Col className='text-center' key={song.id}>
      <img className='img-fluid' src={song.album.cover_medium} alt='track' />
      <p>
        Track: {song.title} <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  )
}

export const artistCard = (artist, i) => {
  return (
    <Row key={"Playlist-" + i}>
      <Col xs={10}>
        <div className='artistCard'>
          <h2>Playlist: {i + 1}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className='imgLinks py-3'>
            {artist.map((song) => albumCard(song))}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export const getSongsAction = (artistName, actionType) => {
  return async (dispatch) => {
    try {
      const response = await fetch(STRIVE_ENDPOINT + artistName)
      if (response.ok) {
        const data = await response.json()
        console.log(actionType)
        dispatch({ type: actionType, payload: data })
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
      console.log(error)
    }
  }
}

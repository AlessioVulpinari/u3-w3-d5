/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import {
  ADD_LIKE,
  ADD_TO_EMINEM,
  ADD_TO_PERRY,
  ADD_TO_PLAYLIST_1,
  ADD_TO_PLAYLIST_2,
  ADD_TO_QUEEN,
  REMOVE_LIKE,
  SET_SELECTED,
  getSongsAction,
} from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Col, Placeholder, Row } from "react-bootstrap"

const StaticCard = () => {
  const dispatch = useDispatch()
  const queenSong = useSelector((state) => state.playlist.queen)
  const eminemSong = useSelector((state) => state.playlist.eminem)
  const perrySong = useSelector((state) => state.playlist.perry)
  const search = useSelector((state) => state.search.content)
  const isLoading = useSelector((state) => state.search.isLoading)
  const hasError = useSelector((state) => state.search.hasError)
  const errorMsg = useSelector((state) => state.search.errorMsg)
  const likes = useSelector((state) => state.like.content)
  const playlist1 = useSelector((state) => state.playlists.playlist1)
  const playlist2 = useSelector((state) => state.playlists.playlist2)

  const addSongToPlaylist1 = (song) => {
    if (playlist1.findIndex((playlistSong) => playlistSong.id === song.id) === -1) {
      dispatch({ type: ADD_TO_PLAYLIST_1, payload: song })
    }
  }

  const addSongToPlaylist2 = (song) => {
    if (playlist2.findIndex((playlistSong) => playlistSong.id === song.id) === -1) {
      dispatch({ type: ADD_TO_PLAYLIST_2, payload: song })
    }
  }

  const albumCard = (song) => {
    return (
      <Col className='text-center' key={song.id}>
        <img
          className='img-fluid'
          src={song.album.cover_medium}
          alt='track'
          onClick={() => dispatch({ type: SET_SELECTED, payload: song })}
        />
        <p>
          Track: {song.title} <br />
          Artist: {song.artist.name}
        </p>
        <div className='d-flex justify-content-evenly'>
          {!likes.includes(song.id) ? (
            <i className='bi bi-star' onClick={() => dispatch({ type: ADD_LIKE, payload: song.id })} />
          ) : (
            <i className='bi bi-star-fill' onClick={() => dispatch({ type: REMOVE_LIKE, payload: song.id })} />
          )}

          <i className='bi bi-1-circle' onClick={() => addSongToPlaylist1(song)} />
          <i className='bi bi-2-circle' onClick={() => addSongToPlaylist2(song)}></i>
        </div>
      </Col>
    )
  }

  useEffect(() => {
    dispatch(getSongsAction("Queen", ADD_TO_QUEEN))
    dispatch(getSongsAction("Eminem", ADD_TO_EMINEM))
    dispatch(getSongsAction("Ketty Perry", ADD_TO_PERRY))
  }, [])

  return (
    <>
      {!search && isLoading && !hasError ? (
        <Row>
          <Col xs={10}>
            <Placeholder as={"div"} className='artistCard' animation='glow'>
              <Placeholder as={"h2"} xs={4} />
            </Placeholder>
            <Placeholder as={Row} className='py-3' animation='glow'>
              <Placeholder as={Col} xs={12} sm={6} lg={4} xl={3} animation='glow'>
                <Placeholder as={"img"} xs={12} className={"img-fluid imgPlaceholder"} />
                <br />
                <Placeholder as={"p"} xs={6} sm={12} className={"paragraphPlaceholder"} />
              </Placeholder>
              <Placeholder as={Col} xs={12} sm={6} lg={4} xl={3} animation='glow'>
                <Placeholder as={"img"} xs={12} className={"img-fluid imgPlaceholder"} />
                <br />
                <Placeholder as={"p"} xs={6} sm={12} className={"paragraphPlaceholder"} />
              </Placeholder>
              <Placeholder as={Col} xs={12} sm={6} lg={4} xl={3} animation='glow'>
                <Placeholder as={"img"} xs={12} className={"img-fluid imgPlaceholder"} />
                <br />
                <Placeholder as={"p"} xs={6} sm={12} className={"paragraphPlaceholder"} />
              </Placeholder>
              <Placeholder as={Col} xs={12} sm={6} lg={4} xl={3} animation='glow'>
                <Placeholder as={"img"} xs={12} className={"img-fluid imgPlaceholder"} />
                <br />
                <Placeholder as={"p"} xs={6} sm={12} className={"paragraphPlaceholder"} />
              </Placeholder>
            </Placeholder>
          </Col>
        </Row>
      ) : (
        hasError && (
          <Alert variant='danger my-3 text-dark'>
            <Alert.Heading className='text-dark'>Oh snap! You got an error!</Alert.Heading>
            <p className='text-dark'>{errorMsg}</p>
          </Alert>
        )
      )}
      {search && (
        <Row>
          <Col xs={10}>
            <div className='artistCard'>
              <h2>Your search: </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className='imgLinks py-3'>
                {search.slice(0, 4).map((song) => albumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
      )}
      {queenSong && (
        <Row>
          <Col xs={10}>
            <div className='artistCard'>
              <h2>Queen: </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className='imgLinks py-3'>
                {queenSong.slice(0, 4).map((song) => albumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
      )}

      {eminemSong && (
        <Row>
          <Col xs={10}>
            <div className='artistCard'>
              <h2>Eminem: </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className='imgLinks py-3'>
                {eminemSong.slice(0, 4).map((song) => albumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
      )}

      {perrySong && (
        <Row id='hipHopSection'>
          <Col xs={10}>
            <div className='artistCard'>
              <h2>Ketty Perry: </h2>
              <Row xs={1} sm={2} lg={3} xl={4} className='imgLinks py-3'>
                {perrySong.slice(0, 4).map((song) => albumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </>
  )
}

export default StaticCard

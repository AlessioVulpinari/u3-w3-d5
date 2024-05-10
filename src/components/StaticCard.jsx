import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { ADD_TO_PLAYLIST, getSongsAction } from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux"

const StaticCard = () => {
  const dispatch = useDispatch()
  const playlist = useSelector((state) => state.playlist.content)

  const albumCard = (song) => {
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

  const artistCard = (artist, i) => {
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

  useEffect(() => {
    dispatch(getSongsAction("Queen", ADD_TO_PLAYLIST))
    dispatch(getSongsAction("Eminem", ADD_TO_PLAYLIST))
    dispatch(getSongsAction("ACDC", ADD_TO_PLAYLIST))
  }, [])

  return (
    <>
      {playlist.length === 3 &&
        playlist.map((singleArtist) => singleArtist.data.slice(0, 4)).map((singleArtist, i) => artistCard(singleArtist, i))}
    </>
  )
}

export default StaticCard

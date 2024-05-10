import { Col, Row } from "react-bootstrap"
import StaticCard from "./StaticCard"
import { useSelector } from "react-redux"

const MainSection = () => {
  const search = useSelector((state) => state.search.content)

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

  return (
    <>
      <Col xs={12} md={9} className='offset-md-3 mainPage'>
        <Row>
          <Col xs={9} lg={11} className='mainLinks d-none d-md-flex'>
            <a href='#'>TRENDING</a>
            <a href='#'>PODCAST</a>
            <a href='#'>MOODS AND GENRES</a>
            <a href='#'>NEW RELEASES</a>
            <a href='#'>DISCOVER</a>
          </Col>
        </Row>
        {search ? artistCard(search.data.slice(0, 4)) : <StaticCard />}
      </Col>
    </>
  )
}

export default MainSection

import { Col, Container, Row } from "react-bootstrap"
import shuffleIcon from "../assets/playerbuttons/shuffle.png"
import prevIcon from "../assets/playerbuttons/prev.png"
import playIcon from "../assets/playerbuttons/play.png"
import nextIcon from "../assets/playerbuttons/next.png"
import repeatIcon from "../assets/playerbuttons/repeat.png"
import { useSelector } from "react-redux"

const Player = () => {
  const selectedSong = useSelector((state) => state.selected.selectedSong)

  return (
    <Container className='fixed-bottom bg-container pt-1' fluid>
      <Row className='h-100'>
        <Col lg={10} className='offset-lg-2'>
          <Row className='h-100 flex-column justify-content-center align-items-center'>
            <Col xs={6} md={4} className='playerControls'>
              <div className='d-flex'>
                <a href='#'>
                  <img src={shuffleIcon} alt='shuffle' />
                </a>
                <a href='#'>
                  <img src={prevIcon} alt='prev' />
                </a>
                <a href='#'>
                  <img src={playIcon} alt='play' />
                </a>
                <a href='#'>
                  <img src={nextIcon} alt='next' />
                </a>
                <a href='#'>
                  <img src={repeatIcon} alt='repeat' />
                </a>
              </div>
              <div className='progress mt-3'>
                <div role='progressbar'></div>
              </div>
              {selectedSong && (
                <div>
                  <p className='text-center text-white'> {selectedSong.title}</p>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Player

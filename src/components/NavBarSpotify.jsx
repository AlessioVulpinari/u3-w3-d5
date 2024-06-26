import { Button, Col, Container, Form, InputGroup, Nav, Navbar, Row } from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { SET_SEARCH, getSongsAction } from "../Redux/Actions"
import { useState } from "react"

const NavBarSpotify = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()

  const playlist1 = useSelector((state) => state.playlists.playlist1)
  const playlist2 = useSelector((state) => state.playlists.playlist2)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSongsAction(search, SET_SEARCH))
  }

  return (
    <Col xs={2}>
      <Navbar expand='lg' className='fixed-left justify-content-between' id='sidebar'>
        <Container className='flex-column align-items-start'>
          <Navbar.Brand href='#'>
            <img src={logo} alt='Spotify Logo' width='131' height='40' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarNavAltMarkup' />
          <Navbar.Collapse id='navbarNavAltMarkup'>
            <Nav className='me-auto'>
              <ul>
                <li>
                  <Nav.Link href='#'>
                    <i className='bi bi-house-door-fill'></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href='#'>
                    <i className='bi bi-book-fill'></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form onSubmit={handleSubmit}>
                    <InputGroup className='mt-3'>
                      <Form.Control
                        placeholder='Search'
                        aria-label='Search'
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <Button variant='outline-secondary' size='sm' type='submit'>
                        Go
                      </Button>
                    </InputGroup>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col xs={12} className='text-white'>
              <h4>Playlist 1:</h4>
              <ul>
                {playlist1.length > 0 ? (
                  playlist1.map((song) => <li key={song.id}> {song.title}</li>)
                ) : (
                  <li>Ancora nessun Elemento</li>
                )}
              </ul>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className='text-white'>
              <h4>Playlist 2:</h4>
              <ul>
                {playlist2.length > 0 ? (
                  playlist2.map((song) => <li key={song.id}> {song.title}</li>)
                ) : (
                  <li>Ancora nessun Elemento</li>
                )}
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='nav-btn'>
          <Button className='signup-btn' type='button'>
            Sign Up
          </Button>
          <Button className='login-btn' type='button'>
            Login
          </Button>

          <div>
            <a href='#'>Cookie Policy</a> | <a href='#'>Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  )
}

export default NavBarSpotify

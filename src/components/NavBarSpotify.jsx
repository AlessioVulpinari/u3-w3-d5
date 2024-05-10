import { Button, Col, Container, Form, FormGroup, InputGroup, Nav, Navbar } from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import { useDispatch } from "react-redux"
import { SET_SEARCH, getSongsAction } from "../Redux/Actions"

const NavBarSpotify = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sumbit")
    dispatch(getSongsAction(e.target.value, SET_SEARCH))
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
                  <Nav.Link>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <InputGroup className='mt-3'>
                          <Form.Control placeholder='Search' aria-label='Search' type='text' />
                          <Button variant='outline-secondary' size='sm' type='submit'>
                            Go
                          </Button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
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

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSection from "./components/MainSection"
import NavBarSpotify from "./components/NavBarSpotify"
import { Container, Row } from "react-bootstrap"
import Player from "./components/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <NavBarSpotify />
          <Routes>
            <Route path='/' element={<MainSection />}></Route>
          </Routes>
        </Row>
      </Container>
      <Player />
    </BrowserRouter>
  )
}

export default App

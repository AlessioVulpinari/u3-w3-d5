import { Col, Row } from "react-bootstrap"
import StaticCard from "./StaticCard"
import { useSelector } from "react-redux"
import { artistCard } from "../Redux/Actions"

const MainSection = () => {
  const search = useSelector((state) => state.search.content)

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

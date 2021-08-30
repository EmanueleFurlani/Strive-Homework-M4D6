import { Col, Container, Jumbotron, Row } from "react-bootstrap"

const MyJumbotron = () => (
  <Jumbotron fluid className="bg-dark pt-4">
    <Container>
      <Row>
        <Col xs={10} sm={8} md={6}>
          <h1>Stribook</h1>
          <h2>Best Book Store Out there</h2>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default MyJumbotron

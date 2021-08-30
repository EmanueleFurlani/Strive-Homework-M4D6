import { Col, Container, Row } from "react-bootstrap"

const MyFooter = () => (
  <footer className="bg-dark pt-4 ">
    <Container>
      <Row className="justify-content-center text-center">
        <Col xs={6} md={4} lg={3}>
          <ul>
            <li>
              <a className="text-muted" href="/">
                Who Are We
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Partners
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <ul>
            <li>
              <a className="text-muted" href="/">
                References
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Feedback
              </a>
            </li>
            <li>
              <a className="text-muted px-2" href="/">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="text-muted px-2" href="/">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="text-muted px-2" href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default MyFooter

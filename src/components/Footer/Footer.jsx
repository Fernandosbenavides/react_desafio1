import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Pokemon Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

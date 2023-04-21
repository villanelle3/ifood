import { FooterContainer } from "./styles"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo.png'

const Footer = function Footer(){
    return(
        <FooterContainer>
            <Container>
                <Row>
                    <Col md={{ span: 2, offset: 5 }}>
                        <img className="image__footer" src={logo} alt="logo" />
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}

export default Footer
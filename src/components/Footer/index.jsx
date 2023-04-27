import { FooterContainer, UL, A, LI, Descricao } from "./styles"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo.png'

const Footer = function Footer(){
    // Data atual ---- ano = new Date().getFullYear()
    const RedesSociais = [
        { name: 'bi bi-instagram', href: '/', },
        { name: 'bi bi-facebook', href: '/', },
        { name: 'bi bi-twitter', href: '/', },
    ]
    return(
        <FooterContainer>
            <Container>
                <Row>
                    <Col md={{ span: 2, offset: 5 }}>
                        <img className="image__footer" src={logo} alt="logo" />
                    </Col>
                    <Col md={{ span: 2, offset: 5 }}>
                        <UL>
                            { 
                                RedesSociais.map( 
                                    (item) => <LI key={item.name}><A href={item.href}><i className={item.name}></i></A></LI> 
                                ) 
                            }
                        </UL>
                    </Col>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Descricao>
                            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, 
                            qualidade dos produtos é toda do estabelecimento contratado. 
                        </Descricao>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}

export default Footer
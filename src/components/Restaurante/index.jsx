import React, { useState, useEffect } from 'react'
import { MainPage } from "./styles"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Modal from '../Modal'

const Restaurantes = function Restaurantes(){
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth); // Tamanho da tela
    function handleWindowSizeChange() {
        setScreenWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const Restaurantes = [
        { id: 0, name: 'Nome do prato', destaque: true, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 1, name: 'Nome do prato', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 2, name: 'Nome do prato', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 3, name: 'Nome do prato', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 4, name: 'Nome do prato', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
    ]
    return(
        <MainPage>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Restaurantes.map((item) => (
                        <Col className="d-flex justify-content-center" key={item.id}>
                            <Card style={{ width: `${ ScreenWidth <= 768 ? ' ' : '472px' }`, border: "6px solid #E66767", borderRadius:"0" }}>
                                <Card.Img variant="top" src={item.href} alt={item.name} style={{position: "relative",  borderRadius:"0" }} />
                                <Card.Body className='card__body__invertido'>
                                    <Card.Title className='card__body__invertido__title' style={{fontWeight: "bold"}}>
                                        {item.name}
                                    </Card.Title>
                                    <Card.Text className='card__body__invertido__text'>
                                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, 
                                        sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas 
                                        e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
                                    </Card.Text>
                                    <Modal/>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MainPage>
    )
}

export default Restaurantes
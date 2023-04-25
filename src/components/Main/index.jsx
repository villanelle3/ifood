import React, { useState, useEffect } from 'react'
import { MainPage, SaibaMaisContainer, Span, SpanDestaque, SpanLeft } from "./styles"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tag from '../Tag'

const PaginaInicial = function PaginaInicial(){
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
        { id: 0, name: 'Nome do restaurante', nota: 4.6, type: 'Italiana', destaque: true, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 1, name: 'Nome do restaurante', nota: 4.6, type: 'Italiana', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 2, name: 'Nome do restaurante', nota: 4.6, type: 'Italiana', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
    ]
    return(
        <MainPage>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {Restaurantes.map((item) => (
                        <Col className="d-flex justify-content-center" key={item.id}>
                            <Card style={{ width: `${ ScreenWidth <= 768 ? ' ' : '472px' }` }}>
                                <Card.Img variant="top" src={item.href} alt={item.name} style={{position: "relative"}} />
                                {item.destaque ? 
                                    <SpanDestaque><Tag children="Destaque da semana" /></SpanDestaque> 
                                    : "" 
                                }
                                <Span>
                                    <Tag children={item.type} />
                                </Span>
                                <Card.Body className='card__body'>
                                    <Card.Title className='card__body__title' style={{fontWeight: "bold"}}>
                                        {item.name}
                                        <SpanLeft>{item.nota} <span className='card__body__star'><i className="bi bi-star-fill"></i></span> </SpanLeft>
                                    </Card.Title>
                                    <Card.Text className='card__body__text'>
                                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, 
                                        sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas 
                                        e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
                                    </Card.Text>
                                    <SaibaMaisContainer>
                                        <a href="/restaurant"><Tag children="Saiba mais" /></a>
                                    </SaibaMaisContainer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MainPage>
    )
}

export default PaginaInicial
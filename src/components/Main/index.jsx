import React, { useState, useEffect } from 'react'
import { MainPage, SaibaMaisContainer, Span, SpanDestaque } from "./styles"
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
        { id: 0, name: 'Nome do restaurante', type: 'Italiana', destaque: true, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 1, name: 'Nome do restaurante', type: 'Italiana', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
        { id: 2, name: 'Nome do restaurante', type: 'Italiana', destaque: false, href: 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg', },
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
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                    <SaibaMaisContainer>
                                        <Tag children="Saiba mais" />
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
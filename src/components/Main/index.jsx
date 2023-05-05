import React, { useState, useEffect } from 'react'
import { MainPage, SaibaMaisContainer, Span, SpanDestaque, SpanLeft } from "./styles"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tag from '../Tag'
import Restaurante from '../../models/restaurante'

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
        new Restaurante(0, 'Antonieta Ristorante', 5.0, 'Italiana', true, 'https://media.gazetadopovo.com.br/bomgourmet/2016/05/parmegiana-cae978d0.jpg'),
        new Restaurante(1, 'Bio Bistrot', 4.5, 'Vegana', false, 'https://www.acasaencantada.com.br/wp-content/uploads/2021/03/Comida-vegana-alface-grao-de-bico-tomatinhos-cereja-abacate-e-folhas-verdes-1.webp'),
        new Restaurante(2, 'Regional Grill', 4.8, 'Brasileira', false, 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/07/Picanha-inteira-na-grelha-para-churrasco-freepik-780x520.jpg'),
        new Restaurante(3, 'Dom Temakeria', 4.9, 'Japonesa', false, 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggcx1H_iT4vTBkXJLj-T__RUoLFLe3K-vsJ5ZG6nLq1ZDCHfrs8M40wHFSndP5Zhvcx4b6_QwukYkDUzE1nAlQlR8mmmgpRH1iFrO5IDJV0urT5z_hRWUU0Pi6o3979x2cdJQJ-7iPJ2WIDeOhU6egT8-IbkzLRsDxUlWqpFSJkR4Nrn8ZT7u3b1Mk/s2000/receita-de-sushi.jpg')
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nisi harum sed, earum dolore officia amet blanditiis eum 
                                        veniam suscipit maxime rem accusamus odio itaque sint, alias 
                                        ullam deleniti consequuntur asperiores?
                                    </Card.Text>
                                    <SaibaMaisContainer>
                                        <a href={`/restaurant/${item.id}`}><Tag children="Saiba mais" /></a>
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
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
        new Restaurante(0, 'Sweet Cupcake', 5.0, 'Doceria', true, 'https://www.sabornamesa.com.br/media/k2/items/cache/8f096abef1c84b031550e510893c2d4d_XL.jpg'),
    ]
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`) // https://my-json-server.typicode.com/villanelle3/restaurantAPI/restaurantes
            .then((response) => {
                if (!response.ok) 
                {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const getBio = (bio) => {
        if(bio.length > 220){
            return bio.slice(0, 217) + '...'
        }
        else{
            return bio
        }
    }
    return(
        <MainPage>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {loading && <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    {data &&
                    data.map(({ id, titulo, destacado, tipo, avaliacao, descricao,  capa, cardapio}) => (
                        <Col className="d-flex justify-content-center" key={id}>
                            <Card style={{ width: `${ ScreenWidth <= 768 ? ' ' : '472px' }` }}>
                                <Card.Img variant="top" src={capa} alt={titulo} style={{position: "relative",  maxHeight: "350px", objectFit: "cover"}} />
                                {destacado ? 
                                    <SpanDestaque><Tag children="Destaque da semana" /></SpanDestaque> 
                                    : "" 
                                }
                                <Span>
                                    <Tag children={tipo} />
                                </Span>
                                <Card.Body className='card__body'>
                                    <Card.Title className='card__body__title' style={{fontWeight: "bold"}}>
                                        {titulo}
                                        <SpanLeft>{avaliacao} 
                                            <span className='card__body__star'><i className="bi bi-star-fill"></i></span> 
                                        </SpanLeft>
                                    </Card.Title>
                                    <Card.Text className='card__body__text'>{getBio(descricao)}</Card.Text>
                                    <SaibaMaisContainer>
                                        <a href={`/restaurant/${id}`}><Tag children="Saiba mais" /></a>
                                    </SaibaMaisContainer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
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
                                        <SpanLeft>{item.nota} 
                                            <span className='card__body__star'><i className="bi bi-star-fill"></i></span> 
                                        </SpanLeft>
                                    </Card.Title>
                                    <Card.Text className='card__body__text'>
                                    {getBio("Our cupcakes are perfect for birthdays, weddings, baby showers, and any other special event that calls for a sweet celebration. We also offer custom designs and flavors to make your event truly unique. Whether you're in the mood for a sweet treat or need a special dessert for your next event, we invite you to come and experience the joy and delight of our cupcake store. We take pride in our warm and inviting atmosphere, where you can indulge in a decadent cupcake or a hot beverage with friends and family. Our friendly staff are always on hand to provide recommendations and help you select the perfect treat for any occasion.")}
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
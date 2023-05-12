import React, { useState, useEffect } from 'react'
import { MainPage } from "./styles"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Modal from '../Modal'

const Restaurantes = function Restaurantes(props){
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth) // Tamanho da tela
    function handleWindowSizeChange() {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, []);
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(`https://dishes-api-8lac.vercel.app/restaurantes`)
            .then((response) => {
                if (!response.ok) 
                {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json()
            })
            .then((actualData) => {
                setData(actualData)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [])
        const FK = parseInt(props.fk)
    return(
        <MainPage>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                {loading && <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    {data &&
                        data.map(({ id, fk, name, image, bio, porcao, price }) => {
                            if (fk === FK){
                                return <Col className="d-flex justify-content-center" key={id}>
                                    <Card style={{ width: `${ ScreenWidth <= 768 ? ' ' : '472px' }`, 
                                        border: "6px solid #E66767", borderRadius:"0" }}>
                                        <Card.Img variant="top" src={image} alt={name} style={{position: "relative",  
                                            borderRadius:"0", objectFit:"cover" }} 
                                        />
                                        <Card.Body className='card__body__invertido'>
                                            <Card.Title className='card__body__invertido__title' style={{fontWeight: "bold"}}>
                                                {name}
                                            </Card.Title>
                                            <Card.Text className='card__body__invertido__text'>
                                                {bio}
                                            </Card.Text>
                                            <Modal price={price} porcao={porcao} name={name} bio={bio} img={image} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            }
                            else{
                                return ""
                            }
                        })
                    }
                </Row>
            </Container>
        </MainPage>
    )
}

export default Restaurantes
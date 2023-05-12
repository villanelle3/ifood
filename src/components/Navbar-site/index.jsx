import React, { useState, useEffect } from 'react'
import { Disclosure, } from '@headlessui/react'
import logo from './images/logo.png'
import { Imagem, LinkNav, TextNav } from './styles'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavMobilie from '../Navbar-mobile'
import Banner from '../Banner'

export default function NavBarSite(props) {
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
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/villanelle3/restaurantAPI/restaurantes`)
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
    }, );
    const FK = parseInt(props.fk)
    return (
        <>
            {ScreenWidth >= 768 ? 
                <>
                <Disclosure as="nav" className="NavBar" style={{position: "relative"}}>
                    <Container className='vertical-center'>
                        <Row>                        
                            <Col className="d-flex justify-content-center" ><LinkNav href="/">Restaurantes</LinkNav></Col>
                            <Col className="d-flex justify-content-center" xs={5}> <LinkNav href='/'>
                                <Imagem src={logo} alt="Logo" /></LinkNav> 
                            </Col>
                            <Col className="d-flex justify-content-center"><TextNav>0 produto(s) no carrinho</TextNav></Col>
                        </Row>
                    </Container>
                </Disclosure>
                </>
            : <NavMobilie/> }
                {FK === 0 ? <Banner 
                    image="https://www.sabornamesa.com.br/media/k2/items/cache/8f096abef1c84b031550e510893c2d4d_XL.jpg" 
                    name="Sweet Cupcake" category="Doceria"/> : ""}
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {data &&
                data.map(({ id, name, stars, bio, category, image, destaque }) => {
                    if (id === FK){
                        return <Banner key={id} image={image} name={name} category={category}/>
                    }
                    else{
                        return ""
                    }
                })
                }
        </>
    )
}
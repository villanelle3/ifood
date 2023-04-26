import React, { useState, useEffect } from 'react'
import { Disclosure, } from '@headlessui/react'
import logo from './images/logo.png'
import { Imagem, LinkNav, TextNav } from './styles'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavMobilie from '../Navbar-mobile'
import Banner from '../Banner'

export default function NavBarSite() {
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
    return (
        <>
            {ScreenWidth >= 768 ? 
                <>
                <Disclosure as="nav" className="NavBar" style={{position: "relative"}}>
                    <Container className='vertical-center'>
                        <Row>                        
                            <Col className="d-flex justify-content-center" ><LinkNav href="/">Restaurantes</LinkNav></Col>
                            <Col className="d-flex justify-content-center" xs={5}><Imagem src={logo} alt="Logo" /></Col>
                            <Col className="d-flex justify-content-center"><TextNav>0 produto(s) no carrinho</TextNav></Col>
                        </Row>
                    </Container>
                </Disclosure>
                </>
            : <NavMobilie/> }
            <Banner image='https://i.ytimg.com/vi/Yiy4BjS6jEc/maxresdefault.jpg'/>
        </>
    )
}
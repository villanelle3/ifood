import { Overlay, CartContainer, SideBar, Btn, CardItem } from "./styles"
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import React, { useState } from 'react'


const Cart = () => {
    const [ShowCart, setShowCart] = useState(true) // Tamanho da tela
    const { isOpen, items } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const closeCard = () => {
        dispatch(close())
        setShowCart(true)
    }
    const getTotalPrice = () => {
        return items.reduce((acumulador, valoratual) => {
            return (acumulador += valoratual.nota)
        }, 0)
    }
    const RemoveItem = (id) => {
        dispatch(remove(id))
    }
    function teste(){
        setShowCart(false)
    }
    function back(){
        setShowCart(true)
    }
    return(
        <>        
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCard} />
            <SideBar>
                {ShowCart ? 
                <>
                    <ul>
                        {items.map((item) => (
                            <CardItem key={item.id}>
                                <img src={item.href} alt={item.name}/>
                                <div>
                                    <h3>{item.name}</h3>
                                    <span>R$ {item.nota}</span>
                                    <button type="button" onClick={() => RemoveItem(item.id)}><i className="bi bi-trash"></i></button>
                                </div>
                            </CardItem>
                        ))}
                    </ul>
                    <Container fluid className="ContPrices">
                        <Row>
                            <Col>Valor total</Col>
                            <Col className="ContPrices__col">R$ {getTotalPrice()}</Col>
                        </Row>
                    </Container>
                    <Btn onClick={teste}>Continuar com a entrega</Btn>
                </> : 
                <>
                    <Form>
                        <Form.Label className="formTitle">Entrega</Form.Label>
                        <Form.Group>
                            <Form.Label className="formLabel">Quem irá receber</Form.Label>
                            <Form.Control id="formInput" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="formLabel">Endereço</Form.Label>
                            <Form.Control id="formInput2" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="formLabel">Cidade</Form.Label>
                            <Form.Control id="formInput3" type="text"  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="formLabel">Complemento (opcional)</Form.Label>
                            <Form.Control id="formInput3" type="text"  />
                        </Form.Group>
                        <Row className="mb-3" id="formRow">
                            <Form.Group className="col col-sm-6">
                                <Form.Label className="formLabel">CEP</Form.Label>
                                <Form.Control className="form-control" type="text" id="formInput41" />
                            </Form.Group>
                                <Form.Group className="col col-sm-6">
                                    <Form.Label className="formLabel">Número</Form.Label>
                                    <Form.Control className="form-control" type="text" id="formInput42" />
                            </Form.Group>
                        </Row>
                        <div className="botoes">
                            <Btn onClick={teste} className="botao">Continuar com o pagamento</Btn>
                            <Btn onClick={back}>Votar para o carrinho</Btn>
                        </div>
                    </Form>
                </>
                }
            </SideBar>
        </CartContainer>
        </>
    )
}

export default Cart
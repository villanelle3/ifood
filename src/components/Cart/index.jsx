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
    const [ShowCart, setShowCart] = useState(true) 
    const [ShowForm, setShowForm] = useState(true)
    const [Final, setFinal] = useState(false)
    const { isOpen, items } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const closeCard = () => {
        dispatch(close())
        setShowCart(true)
        setShowForm(true)
        setFinal(false)
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
    function Pyment(){
        setShowForm(false)
    }
    function backatt(){
        setShowForm(true)
    }
    function finalizar(){
        setFinal(true)
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
                    {ShowForm ?
                        <Form>
                            <Form.Label className="formTitle">Entrega</Form.Label>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="formInput">Quem irá receber</Form.Label>
                                <Form.Control id="formInput" type="text" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="formInput2">Endereço</Form.Label>
                                <Form.Control id="formInput2" type="text" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="formInput3">Cidade</Form.Label>
                                <Form.Control id="formInput3" type="text" required  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="formInput33">Complemento (opcional)</Form.Label>
                                <Form.Control id="formInput33" type="text"  />
                            </Form.Group>
                            <Row className="mb-3" id="formRow">
                                <Form.Group className="col col-sm-6">
                                    <Form.Label className="formLabel" htmlFor="formInput41">CEP</Form.Label>
                                    <Form.Control className="form-control" type="text" required id="formInput41" />
                                </Form.Group>
                                    <Form.Group className="col col-sm-6">
                                        <Form.Label className="formLabel" htmlFor="formInput42">Número</Form.Label>
                                        <Form.Control className="form-control" type="text" required id="formInput42" />
                                </Form.Group>
                            </Row>
                            <div className="botoes">
                                <Btn onClick={Pyment} className="botao" type="submit">Continuar com o pagamento</Btn>
                                <Btn onClick={back}>Votar para o carrinho</Btn>
                            </div>
                        </Form>
                    : 
                        <>
                            <Form>
                                {Final ? 
                                <>
                                    <Form.Label className="formTitle">Pedido realizado</Form.Label>
                                    <p className="mb-4">
                                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, 
                                        será entregue no endereço fornecido.
                                    </p>
                                    <p className="mb-4">
                                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
                                    </p>
                                    <p className="mb-4">                   
                                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua 
                                        segurança e bem-estar durante a refeição.
                                    </p>
                                    <p className="mb-4">
                                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                                    </p>
                                    <Btn>Concluir</Btn>
                                </> : 
                                <>
                                    <Form.Label className="formTitle">Pagamento - Valor total a pagar R$ {getTotalPrice()}</Form.Label>
                                    <Form.Group>
                                        <Form.Label className="formLabel" htmlFor="formInput21">Nome no cartão</Form.Label>
                                        <Form.Control id="formInput21" type="text" required />
                                    </Form.Group>
                                    <Row id="formRow">
                                        <Form.Group className="col col-sm-8">
                                            <Form.Label className="formLabel" htmlFor="formInput223">Número do cartão</Form.Label>
                                            <Form.Control className="form-control" type="number" required id="formInput223" />
                                        </Form.Group>
                                            <Form.Group className="col col-sm-4">
                                                <Form.Label className="formLabel" htmlFor="formInput23">CVV</Form.Label>
                                                <Form.Control className="form-control" type="number" required id="formInput23"  />
                                        </Form.Group>
                                    </Row>
                                    <Row id="formRow">
                                        <Form.Group className="col col-sm-6">
                                            <Form.Label className="formLabel" htmlFor="formInput241">Mês de vencimento</Form.Label>
                                            <Form.Control className="form-control" type="number" required id="formInput241" min="1" max="12" />
                                        </Form.Group>
                                            <Form.Group className="col col-sm-6">
                                                <Form.Label className="formLabel" htmlFor="formInput242">Ano de vencimento</Form.Label>
                                                <Form.Control className="form-control" type="number" required id="formInput242" min="2022" max="2032" />
                                        </Form.Group>
                                        <br/><br/><br/><br/>
                                        <div className="botoes">
                                            <Btn onClick={finalizar} className="botao" type="submit">Finalizar pagamento</Btn>
                                            <Btn onClick={backatt}>Votar para a edição de endereço</Btn>
                                        </div>
                                    </Row>
                                </>}
                            </Form>
                        </>
                    }
                </>
                }
            </SideBar>
        </CartContainer>
        </>
    )
}

export default Cart
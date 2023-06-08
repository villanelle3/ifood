import { Overlay, CartContainer, SideBar, Btn, CardItem } from "./styles"
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from "../../services/api"
import InputMask from 'react-input-mask';


const Cart = () => {
    const [ purchase, {data} ] = usePurchaseMutation()
    
    const formik = useFormik({
        initialValues: {
        name: '',
        endereco: '',
        cidade: '',
        complemento: '',
        cep: '',
        numero: '',
        cardname: '',
        cardnumber: '',
        cvv: '',
        cardexp: '',
        cardyear: ''
    },
        validationSchema: {
            name: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres')
        },
        onSubmit: values => {
            console.log(values);
        },
    })
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

    const nameRef = React.useRef();
    const enderecoRef = React.useRef();
    const cidadeRef = React.useRef();
    const complementoRef = React.useRef();
    const cepRef = React.useRef();
    const numeroRef = React.useRef();
    const [Message, setMessage] = useState(false) 
    const [Message2, setMessage2] = useState(false) 
    const [Message3, setMessage3] = useState(false) 
    function Pyment(){
        if (nameRef.current.value && enderecoRef.current.value && cidadeRef.current.value && cepRef.current.value && numeroRef.current.value)
        {
            if (nameRef.current.value.length < 3 || cidadeRef.current.value.length < 4 || enderecoRef.current.value.length < 6){
                if (nameRef.current.value.length < 3){
                    setMessage("O nome precisa ter pelo menos 3 caracteres.")
                }if (cidadeRef.current.value.length < 4){
                    setMessage2("O nome precisa ter mais de 4 caracteres.")
                }if (cidadeRef.current.value.length < 6){
                    setMessage3("Complete o endereço!")
                }
            }else{
                setMessage(false)
                setShowForm(false)
            }  
        }else{
            alert("Complete o formulário!")
        }  
    }
    function backatt(){
        setMessage4(false)
        setShowForm(true)
    }

    const cardnameRef = React.useRef();
    const cardnumberRef = React.useRef();
    const cvvRef = React.useRef();
    const cardexpRef = React.useRef();
    const cardyearRef = React.useRef();
    const [Message4, setMessage4] = useState(false) 
    const d = new Date();
    let year = d.getFullYear();

    function finalizar(e){
        if (cardnameRef.current.value && cardnumberRef.current.value && cvvRef.current.value && cardexpRef.current.value && cardyearRef.current.value){
            if (parseInt(cardyearRef.current.value) < year || (parseInt(cardyearRef.current.value) === parseInt(year) && parseInt(cardexpRef.current.value) <= parseInt(d.getMonth()))){
                setMessage4("O cartão está expirado! Adicione um cartão válido.")
                e.preventDefault()
                return
            }else{
                setMessage4(false)
                setFinal(true)
                console.log("wait")
                purchase({
                    delivery: {
                        receiver: nameRef.current.value,
                        address: {
                            description: enderecoRef.current.value,
                            city: cidadeRef.current.value,
                            zipCode: cepRef.current.value,
                            number: numeroRef.current.value,
                            complement: complementoRef.current.value
                        }
                    },
                    payment: {
                        card: {
                            name: cardnameRef.current.value,
                            number: cardnumberRef.current.value,
                            code: cvvRef.current.value,
                            expires: {
                                month: cardexpRef.current.value,
                                year: cardyearRef.current.value
                            }
                        }
                    }
                })
            }
        }else{
            alert("Complete o formulário!")
        } 
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
                                    <button type="button" onClick={() => RemoveItem(item.id)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
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
                        <Form  onSubmit={formik.handleSubmit}>
                            <Form.Label className="formTitle">Entrega</Form.Label>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="name">Quem irá receber</Form.Label>
                                <Form.Control onChange={formik.handleChange} ref={nameRef} id="name" name="name" 
                                    value={formik.values.name} type="text" required
                                />
                                {Message ? <small className="red">{Message}</small> : ""}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="endereco">Endereço</Form.Label>
                                <Form.Control onChange={formik.handleChange} ref={enderecoRef} id="endereco" name="endereco" 
                                    value={formik.values.endereco} type="text" required 
                                />
                                {Message3 ? <small className="red">{Message3}</small> : ""}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="cidade">Cidade</Form.Label>
                                <Form.Control onChange={formik.handleChange} ref={cidadeRef} id="cidade" name="cidade" 
                                    value={formik.values.cidade} type="text" required  
                                />
                                {Message2 ? <small className="red">{Message2}</small> : ""}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formLabel" htmlFor="complemento">Complemento (opcional)</Form.Label>
                                <Form.Control onChange={formik.handleChange} ref={complementoRef} id="complemento" 
                                    name="complemento" value={formik.values.complemento} type="text"  
                                />
                            </Form.Group>
                            <Row className="mb-3" id="formRow">
                                <Form.Group className="col col-sm-6">
                                    <Form.Label className="formLabel" htmlFor="cep">CEP</Form.Label>
                                    <InputMask mask="99999-999" maskChar={null} onChange={formik.handleChange} ref={cepRef} className="form-control" 
                                    type="text" required id="cep" name="cep" value={formik.values.cep} 
                                    />
                                </Form.Group>
                                    <Form.Group className="col col-sm-6">
                                        <Form.Label className="formLabel" htmlFor="numero">Número</Form.Label>
                                        <Form.Control onChange={formik.handleChange} ref={numeroRef} className="form-control" 
                                            type="text" required id="numero" name="numero" value={formik.values.numero} 
                                        />
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
                                    <Form.Label className="formTitle">Pedido realizado {data}</Form.Label>
                                    <p className="mb-4">
                                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, 
                                        será entregue no endereço fornecido.
                                    </p>
                                    <p className="mb-4">
                                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças 
                                    extras. 
                                    </p>
                                    <p className="mb-4">                   
                                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo 
                                        assim sua segurança e bem-estar durante a refeição.
                                    </p>
                                    <p className="mb-4">
                                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                                    </p>
                                    <Btn>Concluir</Btn>
                                </> : 
                                <>
                                    <Form.Label className="formTitle">
                                        Pagamento - Valor total a pagar R$ {getTotalPrice()}
                                    </Form.Label>
                                    <Form.Group>
                                        <Form.Label className="formLabel" htmlFor="cardname">Nome no cartão</Form.Label>
                                        <Form.Control onChange={formik.handleChange} id="cardname" ref={cardnameRef} name="cardname" 
                                            value={formik.values.cardname} type="text" required 
                                        />
                                    </Form.Group>
                                    <Row id="formRow">
                                        <Form.Group className="col col-sm-8">
                                            <Form.Label className="formLabel" htmlFor="cardnumber">Número do cartão</Form.Label>
                                            <InputMask mask="9999 9999 9999 9999" maskChar={null} onChange={formik.handleChange} 
                                            className="form-control" type="text" required id="cardnumber" ref={cardnumberRef} 
                                            name="cardnumber" value={formik.values.cardnumber} 
                                            />
                                        </Form.Group>
                                            <Form.Group className="col col-sm-4">
                                                <Form.Label className="formLabel" htmlFor="cvv">CVV</Form.Label>
                                                <InputMask mask="999" maskChar={null} onChange={formik.handleChange} 
                                                className="form-control" type="text" required id="cvv" name="cvv" ref={cvvRef} 
                                                value={formik.values.cvv} />
                                        </Form.Group>
                                    </Row>
                                    <Row id="formRow">
                                        <Form.Group className="col col-sm-6">
                                            <Form.Label className="formLabel" htmlFor="cardexp">Mês de vencimento</Form.Label>
                                            <Form.Control onChange={formik.handleChange} className="form-control" type="number" 
                                                required id="cardexp" name="cardexp" ref={cardexpRef} value={formik.values.cardexp}
                                                min="1" max="12" 
                                            />
                                        </Form.Group>
                                            <Form.Group className="col col-sm-6">
                                                <Form.Label className="formLabel" htmlFor="cardyear">Ano de vencimento</Form.Label>
                                                <Form.Control onChange={formik.handleChange} className="form-control" type="number" 
                                                    required id="cardyear" name="cardyear" ref={cardyearRef} 
                                                    value={formik.values.cardyear} min={year} max="2050" 
                                                />
                                        </Form.Group>
                                        <br/><br/><br/><br/>
                                        <div className="botoes">
                                            <Btn onClick={finalizar} className="botao" type="submit">Finalizar pagamento</Btn>
                                            <Btn onClick={backatt}>Votar para a edição de endereço</Btn>
                                        </div>
                                    </Row>
                                    {Message4 ? <small className="red">{Message4}</small> : ""}
                                </>
                                }
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
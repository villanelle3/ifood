import { Overlay, CartContainer, SideBar, Btn, CardItem } from "./styles"
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'


const Cart = () => {
    const { isOpen, items } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const closeCard = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valoratual) => {
            return (acumulador += valoratual.nota)
        }, 0)
    }
    const RemoveItem = (id) => {
        dispatch(remove(id))
    }
    return(
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCard} />
            <SideBar>
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
                <Btn>Continuar com a entrega</Btn>
            </SideBar>
        </CartContainer>
    )
}

export default Cart
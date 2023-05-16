import { Overlay, CartContainer, SideBar, Btn, CardItem } from "./styles"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {
    return(
        <CartContainer>
            <Overlay/>
            <SideBar>
                <ul>
                    <CardItem>
                        <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg" alt="Girl in a jacket"/>
                        <div>
                            <h3>Nome do produto</h3>
                            <span>R$ 62,92</span>
                            <button><i className="bi bi-trash"></i></button>
                        </div>
                    </CardItem>
                    <CardItem>
                        <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg" alt="Girl in a jacket"/>
                        <div>
                            <h3>Nome do produto</h3>
                            <span>R$ 62,92</span>
                            <button><i className="bi bi-trash"></i></button>
                        </div>
                    </CardItem>
                </ul>
                <Container fluid className="ContPrices">
                    <Row>
                        <Col>Valor total</Col>
                        <Col className="ContPrices__col">R$ 255.50</Col>
                    </Row>
                </Container>
                <Btn>Continuar com a entrega</Btn>
            </SideBar>
        </CartContainer>
    )
}

export default Cart
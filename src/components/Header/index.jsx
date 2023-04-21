import logo from './images/logo.png'
import { Descricao, Logo } from './styles'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = function Header(){
    return(
        <header>
            <Logo>
                <Container>
                    <Row>
                        <Col md={{ span: 2, offset: 5 }}>
                            <img className='header__img' src={logo} alt="logo" />
                        </Col>
                    </Row>
                </Container>
            </Logo>
            <Descricao>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            Viva experiências gastronômicas <br/> no conforto da sua casa
                        </Col>
                    </Row>
                </Container>
            </Descricao>
        </header>
    )
}

export default Header
import Header from "../components/Header"
import PaginaInicial from "../components/Main"
import GlobalStyle, { Container } from "../styles"

function Main(){
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Header/>
                <PaginaInicial/>
            </Container>
        </>
    )
}

export default Main
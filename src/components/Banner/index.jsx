import { BannerContainer, Overlay, Titulo1, Titulo2 } from "./styles"

const Banner = (props) => (
    <BannerContainer fluid image={props.image}>
        <Overlay>
            <Titulo1>Italiana</Titulo1>
            <Titulo2>Nome do restaurante</Titulo2>
        </Overlay>
    </BannerContainer>
)

export default Banner

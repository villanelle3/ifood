import { BannerContainer, Overlay, Titulo1, Titulo2 } from "./styles"

const Banner = (props) => (
    <BannerContainer fluid image={props.image}>
        <Overlay>
            <Titulo1>{props.category}</Titulo1>
            <Titulo2>{props.name}</Titulo2>
        </Overlay>
    </BannerContainer>
)

export default Banner

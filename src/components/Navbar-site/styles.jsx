import styled from 'styled-components'

export const Imagem = styled.img`
    width: 125px;
    border: solid;
    @media screen and (max-width: 767px) {
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }
`

export const LinkNav = styled.a`
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: #E66767;
    }
`
export const TextNav = styled.p`
    font-weight: bold;
    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
}
`
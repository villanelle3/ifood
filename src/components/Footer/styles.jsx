import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: linear-gradient(0deg, rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
    linear-gradient(0deg, #FFEBD9, #FFEBD9);
    color: #E66767;
    height: 150px;
    @media screen and (max-width: 767px) {
        height: 130px;
    }
`
export const UL = styled.ul`
    list-style-type: none;
    text-align:center;
    margin-top: 8px;
`
export const A = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 8px;
    transition: .5s;
    &:hover{
        color:  white;
    }
`
export const LI = styled.li`
    display:inline-block;
`

export const Descricao = styled.p`
    color: #E66767;
    font-size: 11px;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 8px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 10px;
    }
`
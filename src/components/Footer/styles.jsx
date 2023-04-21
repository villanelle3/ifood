import styled from 'styled-components'

export const FooterContainer = styled.footer`
    margin-top:16px;
    background: linear-gradient(0deg, rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
    linear-gradient(0deg, #FFEBD9, #FFEBD9);
    color: #E66767;
    height: 150px;
    @media screen and (max-width: 767px) {
        height: 100px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 130px;
    }
`

export const Logo = styled.div`
    margin-top: 32px;
    @media screen and (max-width: 767px) {
        margin-top: 24px;
    }
`

export const Descricao = styled.p`
    margin-top: 64px;
    color: #E66767;
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 767px) {
        margin-top: 52px;
        font-size: 14px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 18px;
    }
`
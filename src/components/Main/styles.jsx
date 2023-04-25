import styled from 'styled-components'

export const MainPage = styled.main`
    background-color: #fff8f2;
    padding: 48px;
`

export const SaibaMaisContainer = styled.div`
    margin-top: 20px;
`
export const Span = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    margin: 16px;
`
export const SpanDestaque = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    margin: 16px;
    @media screen and (max-width: 767px) {
        left: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        left: 0;
    }
`

export const SpanLeft = styled.span`
    float: right;
`
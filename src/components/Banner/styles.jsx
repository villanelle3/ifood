import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: grid;
    position: relative;
    height: 200px;
    background-image: url(${props => props.image ? props.image : ""});
    @media screen and (max-width: 767px) {
        height: 150px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 180px;
    }
`

export const Overlay = styled.div`
    position: absolute; 
    background: rgba(57, 57, 57, 0.7);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`

export const Titulo1 = styled.p`
    color: white;
    font-weight: 100;
    padding-top: 18px;
    padding-left: 170px;    
    font-style: normal;
    font-weight: 100;
    font-size: 24px;
    line-height: 38px;
    display: block;
    @media screen and (max-width: 767px) {
        padding-top: 10px;
        padding-left: 40px;
        font-size: 15px;  
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding-top: 15px;
        padding-left: 100px;  
        font-size: 20px;
    }
`

export const Titulo2 = styled.p`
    color: white; 
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    display: block;
    padding-left: 170px; 
    padding-top: 72px;
    @media screen and (max-width: 767px) {
        padding-top: 40px;
        padding-left: 40px; 
        font-size: 20px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding-top: 72px;
        padding-left: 100px;  
        font-size: 28px;
    }
`
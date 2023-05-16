import styled from 'styled-components'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;

`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;
    &.is-open{
        display: flex;
    }
`

export const SideBar = styled.aside`
    background-color: #E66767;
    color: #FFEBD9;
    width: 350px;
    z-index: 1;
    padding: 40px 16px 0 16px;
`
export const Btn = styled.button`
    color: #E66767;
    background-color: #FFEBD9;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    padding: 4px;
`

export const CardItem = styled.li`
    display: flex;
    background-color: #FFEBD9;
    color: #E66767;
    padding: 8px;
    margin-bottom: 14px;
    img{
        height: 80px;
        width: 80px;
        object-fit: cover;
    }
    div{
        margin-left: 12px;
        h3{
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 14px;
        }
        button{
            display: block;
            margin-left:auto;
            margin-right: 0;
        }
    }
`


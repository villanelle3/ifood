import React from "react"
import { Botao } from "../Restaurante/styles"
import { Detalhe, Titulo, Descricao, Imagem } from "./styles"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function RestaurantModal(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
        <Botao type="button" onClick={() => setShowModal(true)}>
            Saiba mais
        </Botao>
        {showModal ? (
            <>
            <div
                className="justify-center 
                items-center 
                flex overflow-x-hidden 
                overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 shadow-lg relative flex flex-col w-full bgdark outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <Container>
                                <Row>
                                    <Col sm={4}>
                                        <Imagem src={props.img} alt="" />
                                    </Col>
                                    <Col sm={8}>
                                        <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bgdark h-6 w-6 text-xl block py-0">
                                                x
                                            </span>
                                        </button>
                                        <Titulo className="my-2">{props.name}</Titulo>
                                        <Descricao className="my-4 text-lg leading-relaxed">
                                            {props.bio}
                                        </Descricao>
                                        <Detalhe>{props.porcao}</Detalhe>
                                        <button
                                        className="
                                        font-bold px-2 py-1 text-sm outline-none 
                                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        style={{backgroundColor: "#FFEBD9", color:"#E66767"}}
                                        onClick={() => setShowModal(false)}
                                        >
                                            Adicionar ao carrinho - R$ {props.price}0
                                        </button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
    );
}
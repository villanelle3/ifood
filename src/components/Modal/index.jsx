import React from "react";
import { Botao } from "../Restaurante/styles";
import { Detalhe, Titulo, Descricao } from "./styles";

export default function RestaurantModal() {
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
                            <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bgdark h-6 w-6 text-xl block py-0">
                                    x
                                </span>
                            </button>
                            <Titulo className="my-2">Nome do prato</Titulo>
                            <Descricao className="my-4 text-lg leading-relaxed">
                                I always felt like I could do anything. That's the main
                                thing people are controlled by! Thoughts- their perception
                                of themselves! They're slowed down by their perception of
                                themselves. If you're taught you can't do anything, you
                                won't do anything. I was taught I could do everything.
                            </Descricao>
                            <Detalhe>Serve de 2 a 3 pessoas</Detalhe>
                            <button
                            className="
                            font-bold px-2 py-1 text-sm outline-none 
                            focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            style={{backgroundColor: "#FFEBD9", color:"#E66767"}}
                            onClick={() => setShowModal(false)}
                            >
                                Adicionar ao carrinho - R$ 60,00
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
    );
}
import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente:Cliente) => void
}

export default function Formulario (props: FormularioProps){
    const [nome,setNome] = useState(props.cliente?.nome ?? '') 
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0) 
    const id = props.cliente?.id

    return(
        <div>
            {id ? (<Entrada somenteLeitura texto="Codigo" valor={id} className="mb-4"/>) : false}            
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-4"/>
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade}/>
            <div className=" flex justify-end mt-7">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome,+idade,id))} 
                cor="blue" className="mr-2">
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}

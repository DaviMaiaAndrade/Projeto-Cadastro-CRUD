interface BotaoProps {
    cor?: 'green' |'blue'|'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cores = {
        green: 'from-green-600 to-green-700',
        blue: 'from-blue-400 to-blue-900',
        gray: 'from-gray-400 to-gray-900',
    }

    const cor = props.cor ?? 'gray'

    return(
        <button onClick={props.onClick} className={`
        bg-gradient-to-r  ${cores[cor]}
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}

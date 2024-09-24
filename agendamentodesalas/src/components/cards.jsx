import Image from 'next/image'

export default function Card (props) {
    return(
        <div className='unidadecard'>
            <Image src={props.image} alt={props.alt} width={props.width} height={props.height} className='cardImg'/>
            <h2 className='tituloCard'>{props.title}</h2>
            <button onClick={props.onClick} className='cardButton'>Agendar</button>
        </div>
    )
}
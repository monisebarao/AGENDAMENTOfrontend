import Image from 'next/image'

export default function Card (props) {
    return(
        <div className='unidadeCard'>
            <Image src={props.image} alt={props.alt} width={props.width} height={props.height} className='cardImg'/>
            <h2 className='tituloCard'>{props.title}</h2>
            <button href={props.link} className='cardButton'>Agendar</button>
        </div>
    )
}
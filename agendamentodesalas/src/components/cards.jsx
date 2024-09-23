import Image from 'next/image'

export default function Card (props) {
    return(
        <div>
            <Image src={props.image} alt={props.alt} width={props.width} height={props.height}/>
            <h2>{props.title}</h2>
            <button onClick={props.onClick}>Agendar</button>
        </div>
    )
}
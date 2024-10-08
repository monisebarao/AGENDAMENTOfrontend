import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className="unidadeCard">
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="cardImg"
      />
      <h2 className="tituloCard">{props.title}</h2>
      <button className="cardButton">
        <Link href={props.link} className="cardButtonLink">Agendar</Link>
      </button>
    </div>
  );
}

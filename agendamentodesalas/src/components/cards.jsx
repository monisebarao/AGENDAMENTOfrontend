import Image from "next/image";
import Link from "next/link";
import styles from '@/app/pagInicialSalas/page.module.css'



export default function Card(props) {
  return (
    <div className={styles.unidadeCard}>
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={styles.cardImg}
      />
      <h2 className={styles.tituloCard}>{props.title}</h2>
      <button className={styles.cardButton}>
        <Link href={props.link} className={styles.cardButtonLink}>Agendar</Link>
      </button>
    </div>
  );
}

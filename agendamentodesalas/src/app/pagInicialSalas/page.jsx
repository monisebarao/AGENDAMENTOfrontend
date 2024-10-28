import Header from "@/components/header";
import Card from "@/components/cards";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from './page.module.css'

import lmt from "@/public/lmt.jpeg";
import maker from "@/public/salamaker.jpeg";
import biblioteca from "@/public/biblioteca.jpeg";
import labfisica from "@/public/labfisica.jpeg";
import labquibio from "@/public/labquibio.jpeg";
import senai from "@/public/salasenai.jpeg";

export default function Corpo() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* NAVEGAÇÃO */}
      <section className={styles.disposicaoNav}>
        <div className={styles.salaNav}>
          <Link href="/pagInicialSalas"  className={styles.Link}>SALAS</Link>
        </div>

        <div className={styles.equipNav}>
          <Link href='/pagInicialEquipamentos' className={styles.Link}>EQUIPAMENTOS</Link>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* TITULO PAGINA */}
      <section className={styles.tituloGeral}>
        <h3>Faça seu agendamento aqui</h3>
      </section>

      {/* SEÇÃO CARDS */}
      <section className={styles.disposicaoCards}>
      <Card
          image={lmt}
          alt="lmt"
          title="LABORATÓRIO DE MÍDIAS E TECNOLOGIAS (LMT)"
          width={240}
          height={177}
          link="/agendamentolmt"
        />

        <Card
          image={maker}
          alt="maker"
          title="SALA MAKER"
          width={240}
          height={177}
          link="/agendamentomaker"
        />

        <Card
          image={biblioteca}
          alt="biblio"
          title="BIBLIOTECA"
          width={240}
          height={177}
          link="/agendamentobiblioteca"
        />

        <Card
          image={labfisica}
          alt="labfisica"
          title="LABORATÓRIO DE FÍSICA"
          width={240}
          height={177}
          link="/agendamentolabfisica"
        />

        <Card
          image={labquibio}
          alt="labquibio"
          title="LABORATÓRIO DE QUÍMICA E BIOLOGIA"
          width={240}
          height={177}
          link="/agendamentobioqui"
        />

        <Card
          image={senai}
          alt="senai"
          title="SALA DO CURSO TÉCNICO - SENAI"
          width={240}
          height={177}
          link="/agendamentosalasenai"
        />
      </section>

      <br />

      {/* BOTAO VISUALIZAÇÃO DOS AGENDAMENTOS REALIZADOS */}
      <section className={styles.disposicaoBotao}>
        <button className="visuBotao"><Link href="/visualizacaoagendamentos" className={styles.visuButtonLink}>Visualizar agendamentos realizados</Link></button>
      </section>

      <br />

      <Footer />
    </div>
  );
}


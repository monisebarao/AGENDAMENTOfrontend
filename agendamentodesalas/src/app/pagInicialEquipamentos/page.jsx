import Card from "@/components/cards";
import Header from "@/components/header";
import Link from "next/link";
import styles from './page.module.css'

import lim from "@/public/lim.jpeg";
import compSenai from "@/public/computadorsenai.jpeg";
import legoFundI from "@/public/maletafund1.jpeg";
import legoFundII from "@/public/maletafund2.jpeg";
import som from "@/public/caixadesom.jpeg";
import labdisk from "@/public/labdisks.jpeg";
import Footer from "@/components/footer";

function Corpo2() {
  return (
    <div>
      <Header />

      <section className={styles.disposicaoNav}>
        <div className={styles.salaNav}>
          <Link href="/pagInicialSalas"  className={styles.Link}>SALAS</Link>
        </div>

        <div className={styles.equipNav}>
          <Link href="./pagInicialEquipamentos"  className={styles.Link}>EQUIPAMENTOS</Link>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section className={styles.tituloGeral}>
        <h3>Faça seu agendamento de equipamentos aqui</h3>
      </section>

      <section className={styles.disposicaoCards}>
        <Card
          image={lim}
          alt="lim"
          title="LABORATÓRIO DE INFORMÁTICA MOVEL (LIM)"
          width={240}
          height={177}
          link="/agendamentolim"
        />

        <Card
          image={compSenai}
          alt="compSenai"
          title="COMPUTADORES DA SALA DO CURSO TÉCNICO - SALA 1"
          width={240}
          height={177}
          link="/agendamentocomputadoressenai"
        />

        <Card
          image={legoFundI}
          alt="legoFundI"
          title="MALETA LEGO - FUNDAMENTAL I"
          width={240}
          height={177}
          link="/agendamentomaletafundum"
        />

        <Card
          image={legoFundII}
          alt="legoFundII"
          title="MALETA LEGO - FUNDAMENTAL II"
          width={240}
          height={177}
          link="/agendamentomaletafunddois"
        />

        <Card
          image={som}
          alt="som"
          title="CAIXA DE SOM"
          width={240}
          height={177}
          link="/agendamentosom"
        />

        <Card
          image={labdisk}
          alt="labdisk"
          title="LABDISK"
          width={240}
          height={177}
          link="agendamentolabdisk"
        />
      </section>

      <br />

      <section className={styles.disposicaoBotao}>
        <button className={styles.visuBotao}>
          <Link href="/visualizacaoagendamentos" className={styles.visuButtonLink}>
            Visualizar agendamentos realizados
          </Link>
        </button>
      </section>

      <br />

      <Footer />
    </div>
  );
}

export default Corpo2;

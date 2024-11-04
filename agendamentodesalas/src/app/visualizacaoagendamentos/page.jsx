import styles from "./page.module.css";
import Logo from "@/public/sesilogo.png";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import cardsAgendamentosFeitos from "@/components/cardsAgenda";

export default function VisualizacaoAgendamentos() {
  return (
    <div>
      <div className={styles.header}>
        <Image className={styles.logo} src={Logo} width={110} height={60} />
        <br />
        <h2>Agendamentos Realizados</h2>
      </div>
      <br />

      <div className={styles.disposicaoCardsAgenda}>
        <div className={styles.cardAgendamentosFeitos}>
          <h1>
            {" "}
            Sala Maker - 14/11
            {/* {nome_sala} - {dtInicio} */}
          </h1>{" "}
          <br />
          <h2>
            {" "}
            Horário: 16:15 - 17:30
            {/* Horário: {hr_entrada1} - {hr_saida1} */}
          </h2>
          <br />
          <h2>
            {" "}
            Professor responsável: Eduardo Henrique Assis
            {/* Professor(a) responsável: {nome_prof} */}
          </h2>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className={styles.disposicaoCardsAgenda}>
        <div className={styles.cardAgendamentosFeitos}>
          <h1>
            {" "}
            LMT - 15/11
            {/* {nome_sala} - {dtInicio} */}
          </h1>{" "}
          <br />
          <h2>
            {" "}
            Horário: 09:00 - 10:30
            {/* Horário: {hr_entrada1} - {hr_saida1} */}
          </h2>
          <br />
          <h2>
            {" "}
            Professor responsável: Rafael Sorensen
            {/* Professor(a) responsável: {nome_prof} */}
          </h2>
          <br />
        </div>
      </div>

      <cardsAgendamentosFeitos />
      <br />
      <button className={styles.botaoVoltar}>
        <Link className={styles.link} href="/pagInicialSalas">
          🏠| Voltar para página de agendamentos
        </Link>
      </button>
      <Footer />
    </div>
  );
}

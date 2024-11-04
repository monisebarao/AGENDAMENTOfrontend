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

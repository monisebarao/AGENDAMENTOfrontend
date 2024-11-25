import styles from "./page.module.css";
import Logo from "@/public/sesilogo.png";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function VisualizacaoAgendamentos() {
  return (
    <div>
      {/* HEADER */}
      <div className={styles.header}>
        <Image className={styles.logo} src={Logo} width={110} height={60} />
        <br />
        <h1 className={styles.titulo}>Agendamentos Realizados</h1>
      </div>
      <br />
      <br/>
      <br/>
      <br />
      {/* CONTEUDO */}

      {/* Filtros */}
      <div className={styles.disposicaoVisualizacao}>
        <h3 className={styles.h3Visualizacao}>
          Selecione o agendamento que você quer visualizar.
        </h3>
        <label>Escolher agendamento: </label>
        <br />
        <select className={styles.selectVisualizacao}>
          <option>teste</option>
          <option>teste1</option>
          <option>teste2</option>
          <option>teste3</option>
         
        </select>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br/>

      {/* EXIBIÇÃO DOS AGENDAMENTOS */}

      <br />
      <br />
  
      <button className={styles.botaoVoltar}>
        <Link className={styles.link} href="/pagInicialSalas">
          Voltar para página de agendamentos
        </Link>
      </button>
    
      <Footer />
    </div>
  );
}

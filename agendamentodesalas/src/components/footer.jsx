import styles from '@/app/page.module.css'

export default function Footer() {
  return (
    <div className={styles.divmaior}>

      <div className={styles.escolacurso}>
        <h1>Escola SESI-SP de Vinhedo (CE 242)</h1>
        <br />
        <br />
        <h1>Análise e Desenvolvimento de Sistemas - SENAI</h1>
      </div>

      <br />

      <div className={styles.enderecogrupo}>
        <h1>Av. Ana Lombardi Gasparini, 1155 - Jardim Nova Canudos.</h1>
        <br />
        <br />
        <h1 className={styles.grupo}>Grupo 3 - Curso Técnico</h1>
        <br />
      </div>

      <div className={styles.copyright}>
        <h1>Copyright 2024 © Todos os direitos reservados. - DM0</h1>
      </div>

    </div>
  );
}


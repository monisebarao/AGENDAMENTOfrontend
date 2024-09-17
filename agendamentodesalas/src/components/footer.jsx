function Footer() {
  return (
    <div className={styles.footerhome}>
      <div className={styles.footer2}>
        <div className={styles.thome}>
          <h1>Escola SESI-SP de Vinhedo (CE 242)</h1>
          <br />
          <h1 className={styles.thm1}>
            Av. Ana Lombardi Gasparini, 1155 - Jardim Nova Canudos
          </h1>
        </div>
        <br />
        <div className={styles.thome2}>
          <h1>Desenvolvimento de Sistemas - SENAI</h1>
          <br />
          <h1 className={styles.thm}>Grupo 6 - Curso Técnico</h1>
        </div>
        <br />
        <div className={styles.thome3}>
          <h1>Copyright 2024 © Todos os direitos reservados. - DM0</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

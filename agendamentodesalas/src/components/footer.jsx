import styles from '@/app/page.module.css'

export default function Footer() {
  return (
    <div className={styles.footerhome}>
        <div className={styles.escola}>
          <h1>Escola SESI-SP de Vinhedo (CE 242)</h1>
          <br />
          <h1 className={styles.endereco}>
            Av. Ana Lombardi Gasparini, 1155 - Jardim Nova Canudos.
          </h1>
        </div>
        <br />
        <div className={styles.curso}>
          <h1>Desenvolvimento de Sistemas - SENAI</h1>
          <br />
          <h1 className={styles.grupo}>Grupo 6 - Curso Técnico</h1>
        </div>
        <br />
       
        <div className={styles.copyright}>
          <h1>Copyright 2024 © Todos os direitos reservados. - DM0</h1>
        </div>
      </div>
  );
}
       

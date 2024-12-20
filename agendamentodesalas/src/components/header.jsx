import Logo from "../public/sesilogo.png";
import styles from "@/app/page.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <view>
      <div className={styles.divpai}>

        <div className={styles.linha}>
          <Image className={styles.logo} src={Logo} width={103} height={60} />

          <div className={styles.botaoprof}>
            <button className={styles.visubotaoprof}>
              <Link href="/cadastroprofessores" className={styles.visuprofLink}>Cadastrar Professor</Link></button>
              
          <button className={styles.visubotaoprof1}>
          <Link href="/deletarprofessores" className={styles.visuprofLink1}>Deletar Professor</Link></button>
          </div>
         
        </div>
      </div>
      <br />

      <div className={styles.headerconteiner}>
        <div className={styles.titulo}>
          <h1 className={styles.tituloPrincipal}>AGENDAMENTOS</h1>
          <h3 className={styles.bemVindos}>Seja bem-vindo(a)!</h3>
        </div>
      </div>
    </view>
  );
}
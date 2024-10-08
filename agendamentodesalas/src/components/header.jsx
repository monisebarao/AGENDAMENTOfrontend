import Image from "next/image";
import styles from "@/app/page.module.css";
import Logo from "../public/sesilogo.png";

export default function Header() {
  return (
    <view>
      <div>
        <hr className={styles.linha} />
        <Image className={styles.logo} src={Logo} width={100} height={60} />
      </div>
      <div className={styles.headerconteiner}>
        <div className={styles.titulo}>
          <h1 className={styles.tituloPrincipal}>AGENDAMENTOS</h1>
          <h3 className={styles.bemVindos}>Seja bem-vindo(a)!</h3>
        </div>
      </div>
    </view>
  );
}

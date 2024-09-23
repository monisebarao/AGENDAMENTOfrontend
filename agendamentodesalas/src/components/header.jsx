import Image from "next/image";
import styles from '@/app/page.module.css'

export default function Header() {
  return (
    <view>
  <div>
        <hr className={styles.linha}/>
      </div>
    
    <div className={styles.headerconteiner}> 
      

      <Image className={styles.logo}
        src={"/public/sesilogo.png"} width="50" height={50} />

      <div className={styles.titulo}>
        <h1 style={{ color: "white", fontWeight: "bold" }}>
          AGENDAMENTOS
        </h1>
        <h3 style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Seja bem-vindo(a)!
        </h3>
      </div>
    </div>
    </view>
  );
};

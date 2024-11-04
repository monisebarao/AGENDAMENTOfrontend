import Logo from "../public/sesilogo.png";
import styles from "@/app/page.module.css"
import Image from "next/image";

export default function Header() {
  return (
    <view>
      <div className={styles.divpai}>

        <div className={styles.linha}> 
          <Image className={styles.logo} src={Logo} width={103} height={60} /> 
          <div className= {styles.dropdown}>
            <button className={styles.dropbtn}>Cadastrar</button>
            <div className={styles.dropdowncontent}>
              <a href="./cadastroprofessores">Professores</a>
              <a href="./cadastrosalas">Salas</a>
              <a href="./cadastroequipamentos">Equipamentos</a>
            </div>
          </div>

          <div className= {styles.dropdown1}>
            <button className={styles.dropbtn1}>Editar</button>
            <div className={styles.dropdowncontent1}>
              <a href="./cadastroprofessores">Laboratório de Mídia e Tecnologia (LMT)</a>
              <a href="./cadastrosalas">Sala Maker</a>
              <a href="./cadastroequipamentos">Biblioteca</a>
              <a href="./cadastroequipamentos">Laboratório de Física</a>
              <a href="./cadastroequipamentos">Laboratório de Química e Biologia</a>
              <a href="./cadastroequipamentos">Sala de Curso Técnico - Senai</a>
              <a href="./cadastroequipamentos">Laboratório de Informática Movel (LIM)</a>
              <a href="./cadastroequipamentos">Computadores da Sala do Curso Técnico - Sala 1</a>
              <a href="./cadastroequipamentos">Maleta Lego - Fundamental 1</a>
              <a href="./cadastroequipamentos">Maleta Lego - Fundamental 2</a>
              <a href="./cadastroequipamentos">Caixa de Som</a>
              <a href="./cadastroequipamentos">Labdisk</a>
            </div>
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
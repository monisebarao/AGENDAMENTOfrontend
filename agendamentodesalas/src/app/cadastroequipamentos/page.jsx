"use client";
import styles from "@/app/page.module.css";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/sesilogo.png";

export default function Form() {
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
            <h1 className={styles.tituloPrincipal}>Cadastro</h1>
            <h3 className={styles.bemVindos}>Professores</h3>
          </div>
        </div>

<div>

{/* NAVEGAÇÃO */}
<section className="disposicaoNav">
  <div className="salaNav">
    <Link href="/">SALAS</Link>
  </div>

  <div className="equipNav">
    <Link href="/pagInicialEquipamentos">EQUIPAMENTOS</Link>
  </div>
</section>

<br />
<br />

{/* TITULO PAGINA */}
<section className="tituloGeral">
  <h3>Faça um novo cadastro aqui!</h3>
</section>
<br />

<form className="disposicaoFormSalas">
  <div>
    <label>Nome do(a) professor(a):</label>
    <br />
    <input type="text" name="nomeProf" />
  </div>
  <br />
  <br/>

  <div>
  <label>RA:</label>
  <br />
  <input type="number" name="quantidade" />
</div>

<br />
<br />

{/* BOTAO SUBMIT
<section>
  <br/>
  <button className="botaoForm">
    <Link href="/">REALIZAR CADASTRO</Link>
  </button>
</section> */}
</form>
<Footer />
</div>
</view>

);
}
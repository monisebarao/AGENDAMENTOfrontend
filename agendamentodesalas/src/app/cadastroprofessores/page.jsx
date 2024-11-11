"use client";
import styles from "@/app/page.module.css";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/sesilogo.png";
import styless from "@/app/pagInicialSalas/page.module.css"

export default function Form() {
  return (

    <view>
      <div className={styles.divpai}>

        <div className={styles.linha}>
          <Image className={styles.logo} src={Logo} width={103} height={60} />
          <div className={styles.dropdown}>
          </div>
        </div>

      </div>
      <br />

      <div className={styles.headerconteiner}>
        <div className={styles.titulo}>
          <h1 className={styles.tituloPrincipal}>CADASTRO</h1>
          <h3 className={styles.bemVindos}>Professores</h3>
        </div>
      </div>

      <div>

        {/* NAVEGAÇÃO */}
        <section className={styless.disposicaoNav}>
          <div className={styless.salaNav}>
            <Link href="/pagInicialSalas" className={styless.Link}>SALAS</Link>
          </div>

          <div className={styless.equipNav}>
            <Link href='/pagInicialEquipamentos' className={styless.Link}>EQUIPAMENTOS</Link>
          </div>
        </section>

        <br />
        <br />

        {/* TITULO PAGINA */}
        <section className={styles.titulocadastro}>
          <h3>Faça um novo cadastro aqui!</h3>
        </section>
        <br />


        <form className={styles.disposicaocadastro}>
          <div>
            <label>Nome do professor:</label>
            <br />
            <input type="text" name="nomeProf" />
          </div>
          <br />
          <br />

          <div>
            <label>NIF:</label>
            <br />
            <input type="number" name="quantidade" />
          </div>

          <br />
          <br />

          {/* BOTAO SUBMIT */}
          <section>
            <br />
            <button className={styles.dropbtn2}>
              <Link className={styles.texto} href="/pagInicialSalas">Realizar Cadastro</Link>
            </button>
          </section>

        </form>
        <Footer />
      </div>
    </view>

  );
}
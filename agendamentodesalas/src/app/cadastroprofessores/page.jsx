"use client";
import styles from "@/app/page.module.css";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/sesilogo.png";
import styless from "@/app/pagInicialSalas/page.module.css"
import { useState } from "react";

export default function Form() {
  const [nif_prof, setNif_prof] = useState('');
  const [nome_prof, setNome_prof] = useState('');

  const Createprof = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/professor/criar', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          nif_prof,
          nome_prof
        }),
      })

    }

    catch {
      alert('Não foi possivel cadastrar um professor')
    }

  }

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


        <form className={styles.disposicaoFormcadast}>
          <div>
            <label>Nome do professor:</label>
            <br />
            <input type="text" value={nome_prof} name="nomeProf" onChange={(e) => setNome_prof(e.target.value)} />
          </div>
          <br />
          <br />

          <div>
            <label>NIF:</label>
            <br />
            <input type="number" value={nif_prof} name="quantidade" onChange={(e) => setNif_prof(e.target.value)} />
          </div>

          <br />
          <br />


          <br />
          <div className= {styles.container}>
            <button className={styles.botaoFormcadast}>REALIZAR CADASTRO</button>
          </div>

        </form>

        <Footer />
      </div>
    </view>

  );
}
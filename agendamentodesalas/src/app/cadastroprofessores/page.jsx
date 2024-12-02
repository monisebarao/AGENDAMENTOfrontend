"use client";
import styles from "@/app/page.module.css";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/sesilogo.png";
import styless from "@/app/pagInicialSalas/page.module.css";
import { useEffect, useState } from "react";

export default function Form() {
  const [professores, setProfessores] = useState([]);
  const [formData, setFormData] = useState({
    nif_prof: "",
    nome_prof: "",
    adm: 0,
  });

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch(`http://localhost:3001/professor`);
        if (!response.ok) throw new Error("Erro ao buscar professores");

        const data = await response.json();
        setProfessores(data);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };
    fetchProfessores();
  }, []);

  // Submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Dados do formulário antes do envio:", formData);

    try {
      const response = await fetch("http://localhost:3001/professor/criar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = "../pagInicialSalas";
        setFormData({
          nif_prof: "",
          nome_prof: "",
          adm: 0,
        });
      } else {
        throw new Error("Erro ao realizar cadastro do novo docente!");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
      alert("Erro ao realizar cadastro");
    }
  };

  return (
    <div>
      <div className={styles.divpai}>
        <div className={styles.linha}>
          <Image className={styles.logo} src={Logo} width={103} height={60} />
          <div className={styles.dropdown}></div>
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
            <Link href="/pagInicialSalas" className={styless.Link}>
              SALAS
            </Link>
          </div>

          <div className={styless.equipNav}>
            <Link href="/pagInicialEquipamentos" className={styless.Link}>
              EQUIPAMENTOS
            </Link>
          </div>
        </section>

        <br />
        <br />

        {/* TITULO PAGINA */}
        <section className={styles.titulocadastro}>
          <h3>Faça um novo cadastro aqui!</h3>
        </section>
        <br />

        <form className={styles.disposicaoFormcadast} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nomeProf">Nome do professor:</label>
            <br />
            <input
              type="text"
              id="nomeProf"
              value={formData.nome_prof} // Acesse nome_prof através de formData
              onChange={(e) =>
                setFormData({ ...formData, nome_prof: e.target.value })
              } // Atualize o estado corretamente
            />
          </div>
          <br />
          <br />

          <div>
            <label htmlFor="nifProf">NIF:</label>
            <br />
            <input
              type="number"
              id="nifProf"
              value={formData.nif_prof} 
              onChange={(e) =>
                setFormData({ ...formData, nif_prof: e.target.value })
              } 
            />
          </div>

          <input
            type="text"
            id="cod_sala"
            name="cod_sala"
            value={formData.adm}
            required
            hidden
            disabled
          />

          <br />
          <br />

          <div className={styles.container}>
            <button type="submit" className={styles.botaoFormcadast}>
              REALIZAR CADASTRO
            </button>
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}

"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from "@/app/pagInicialEquipamentos/page.module.css";
import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado dos inputs
import { useRouter } from "next/navigation"; // Importa o hook useRouter do Next.js para redirecionamento de página

export default function Form() {
  // INTEGRAÇÃO COM O BACKEND

  const [nome_prof, setNome_prof] = useState("");
  const [dtInicio, setDtinicio] = useState("");
  const [hr_entrada1, setHr_entrada1] = useState("");
  const [hr_saida1, setHr_saida1] = useState("");
  const [turma, setTurma] = useState("");

  const createConsulta = async (e) => {
    e.preventDefault();

    const requestBody = {
      nome_prof: nome_prof,
      dtinicio: dtInicio,
      hr_entrada1: hr_entrada1,
      hr_saida1: hr_saida1,
      turma: turma,
    };

    try {
      const response = await fetch("http://localhost:3001/salaConsulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Agendamento criado com sucesso");
        window.location.href = "/visualizacaoagendamentos";
      } else {
        alert("Erro ao criar agendamento");
      }
    } catch (error) {
      alert("Erro ao criar agendamento: " + error);
    }
  };

  return (
    <div>
      <Header />

      {/* NAVEGAÇÃO */}
      <section className={styles.disposicaoNav}>
        <div className={styles.salaNav}>
          <Link href="/pagInicialSalas" className={styles.Link}>
            SALAS
          </Link>
        </div>

        <div className={styles.equipNav}>
          <Link href="/pagInicialEquipamentos" className={styles.Link}>
            EQUIPAMENTOS
          </Link>
        </div>
      </section>

      <br />
      <br />

      {/* TITULO PAGINA */}
      <section className={styles.tituloGeral}>
        <h3>LABORATÓRIO DE BIOLOGIA E QUÍMICA</h3>
      </section>
      <br />

      <input type="text" value="Valor Fixo" placeholder="lmt" readonly></input>

      <form className={styles.disposicaoFormSalas} onSubmit={createConsulta}>
        <label>Nome do professor: </label>
        <input
          type="text"
          name="name"
          value={nome_prof}
          onChange={(e) => setNome_prof(e.target.value)}
        />

        <br />

        <label>Disciplina:</label>
        <select>
          <option></option>

          <option>Arte</option>
          <option>Biologia/Ciência da Natureza</option>
          <option>Educação Física</option>
          <option>Eixo Integrador Interáreas</option>
          <option>Física</option>
          <option>Geografia</option>
          <option>História</option>
          <option>Língua Inglesa</option>
          <option>Língua Portuguesa</option>
          <option>Matemática </option>
          <option>Mentoria para o futuro</option>
          <option>Mundo do trabalho e empreendedorismo</option>
          <option>Programação e Robótica</option>
          <option>Tópicos avançados</option>
          <option>Mundo do trabalho e empreendedorismo</option>
          <option>Trilha de produção de texto</option>
          <option>Mentoria para o futuro</option>
        </select>
        <br />

        <label for="data">Data:</label>
        <input
          type="date"
          value={dtInicio}
          onChange={(e) => setDtinicio(e.target.value)}
        ></input>
        <br />

        <label for="hr_entrada">Horário de início:</label>
        <input
          type="time"
          name="hr_entrada1"
          value={hr_entrada1}
          onChange={(e) => setHr_entrada1(e.target.value)}
        ></input>
        <br />

        <label for="hr_saida1">Horário de término:</label>
        <input
          type="time"
          name="hr_saida1"
          value={hr_saida1}
          onChange={(e) => setHr_saida1(e.target.value)}
        ></input>

        <br />

        <label for="turma">Turma:</label>
        <select name="turma" value={turma} onChange={(e) => setTurma(e.target.value)}
        >
          <option></option>
          <option>1º Ano - Fundamental I</option>
          <option>2º Ano - Fundamental I</option>
          <option>3º Ano - Fundamental I</option>
          <option>4º Ano - Fundamental I</option>
          <option>5º Ano - Fundamental I</option>
          <option>6º Ano A - Fundamental II</option>
          <option>6º Ano B - Fundamental II</option>
          <option>7º Ano A - Fundamental II</option>
          <option>7º Ano B - Fundamental II</option>
          <option>8º Ano A - Fundamental II</option>
          <option>8º Ano B - Fundamental II</option>
          <option>9º Ano A - Fundamental II</option>
          <option>9º Ano B - Fundamental II</option>
          <option>1º Ano A - Ensino Médio</option>
          <option>1º Ano B - Ensino Médio</option>
          <option>2º Ano - Ensino Médio</option>
          <option>3º Ano - Ensino Médio</option>
        </select>
        <br />

        {/* BOTAO SUBMIT */}
        <section>
          <button className={styles.botaoForm} onClick={createConsulta}>
            <Link href="/visualizacaoagendamentos" className={styles.Link}>
              REALIZAR AGENDAMENTO
            </Link>
          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}

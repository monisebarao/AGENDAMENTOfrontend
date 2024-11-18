"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from "@/app/pagInicialEquipamentos/page.module.css";
import React, { useEffect, useState } from "react";

export default function Form() {
  const [professores, setProfessores] = useState([]);
  const [formData, setFormData] = useState({
    data_sel1: "",
    hr_entrada1: "",
    hr_saida1: "",
    turma1: "",
    disciplina1: "",
    id_prof: "",
    cod_sala: "",
  });

  // Carregar a lista de professores da API quando o componente é montado
  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch("http://localhost:3001/professor");
        if (!response.ok) throw new Error("Erro ao buscar professores");

        const data = await response.json();
        setProfessores(data);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };
    fetchProfessores();
  }, []);

  // Atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar os dados do formulário antes de enviar
    console.log("Dados do formulário antes do envio:", formData);

    try {
      const response = await fetch("http://localhost:3001/agenda1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = "../visualizacaoagendamentos";
        setFormData({
          data_sel1: "",
          hr_entrada1: "",
          hr_saida1: "",
          turma1: "",
          disciplina1: "",
          id_prof: "",
          cod_sala: 1,
        });
      } else {
        throw new Error("Erro ao realizar agendamento");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
      alert("Erro ao realizar agendamento");
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

      {/* TÍTULO DA PÁGINA */}
      <section className={styles.tituloGeral}>
        <h3>BIBLIOTECA</h3>
      </section>

      <br />

      <form onSubmit={handleSubmit} className={styles.disposicaoFormEquip}>
        {/* Campo de Seleção de Professor */}
        <label>Nome do professor:</label>
        <select
          name="id_prof"
          value={formData.id_prof}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um professor</option>
          {professores.map((professor) => (
            <option key={professor.id_prof} value={professor.id_prof}>
              {professor.nome_prof}
            </option>
          ))}
        </select>

        <br />
        <br />

        {/* Outros campos do formulário */}
        <label>Disciplina:</label>
        <select
          name="disciplina1"
          value={formData.disciplina1}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma disciplina</option>
          <option>Arte</option>
          <option>Biologia/Ciência da Natureza</option>
          <option>Educação Física</option>
          <option>Eixo Integrador Interáreas</option>
          <option>Física</option>
          <option>Geografia</option>
          <option>História</option>
          <option>Língua Inglesa</option>
          <option>Língua Portuguesa</option>
          <option>Matemática</option>
          <option>Mentoria para o futuro</option>
          <option>Mundo do trabalho e empreendedorismo</option>
          <option>Programação e Robótica</option>
          <option>Tópicos avançados</option>
          <option>Trilha de produção de texto</option>
        </select>

        <br />

        <label htmlFor="data_sel1">Data:</label>
        <input
          type="date"
          id="data_sel1"
          name="data_sel1"
          value={formData.data_sel1}
          onChange={handleChange}
          required
        />

        <br />

        <label htmlFor="hr_entrada1">Horário de início:</label>
        <input
        min="07:00"
        max="17:10"
        type="time"
        id="hr_entrada1"
        name="hr_entrada1"
        value={formData.hr_entrada1}
        onChange={handleChange}
        required
        />
        <small>Horário permitido: das 07h as 17h10</small>

        <br />

        <label htmlFor="hr_saida1">Horário de término:</label>
        <input
        min="07:50"
        max="18:00"
          type="time"
          id="hr_saida1"
          name="hr_saida1"
          value={formData.hr_saida1}
          onChange={handleChange}
          required
        />
        <small>Horário permitido: das 07h50 as 18h.</small>

        <br />

        <label>Turma:</label>
        <select
          name="turma1"
          value={formData.turma1}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma turma</option>
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

        {/* <label htmlFor="cod_sala">Código da sala:</label> */}
        <input
          type="number"
          id="cod_sala"
          name="cod_sala"
          value={formData.cod_sala = 3}
          onChange={handleChange}
          required
          hidden
          disabled
        />

        <br />

        {/* Botão de submit */}
        <section>
          <br />
          <button type="submit" className={styles.botaoForm}>
            REALIZAR AGENDAMENTO
          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}

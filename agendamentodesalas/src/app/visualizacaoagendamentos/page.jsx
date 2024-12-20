"use client";
import styles from "./page.module.css";
import Logo from "@/public/sesilogo.png";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VisualizacaoAgendamentos() {
  const [salas, setSala] = useState([]);
  const [equipamentos, setEquipamento] = useState([]);
  const [salaConsulta, setConsulta1] = useState([]);
  const [equipamentoConsulta, setConsulta2] = useState([]);
  const [formData, setFormData] = useState({ cod_sala: "", cod_eqp: "" });

  useEffect(() => {
    const fetchSala = async () => {
      try {
        const response = await fetch("http://localhost:3001/sala");
        if (!response.ok) throw new Error("Erro ao buscar sala");
        const data = await response.json();
        setSala(data);
      } catch (error) {
        console.error("Erro ao buscar sala:", error);
      }
    };

    const fetchEquipamento = async () => {
      try {
        const response = await fetch("http://localhost:3001/equipamento");
        if (!response.ok) throw new Error("Erro ao buscar equipamento");
        const data = await response.json();
        setEquipamento(data);
      } catch (error) {
        console.error("Erro ao buscar equipamento:", error);
      }
    };

    fetchSala();
    fetchEquipamento();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitSala = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/sala_consulta");
      if (!response.ok) throw new Error("Erro ao buscar agendamento da sala");
      const data = await response.json();
      const filteredData = data.filter(
        (item) => item.cod_sala.toString() === formData.cod_sala
      );
      setConsulta1(filteredData);
    } catch (error) {
      console.error("Erro ao buscar agendamento da sala:", error);
    }
  };

  const handleSubmitEquipamento = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/equipamento_consulta");
      if (!response.ok) throw new Error("Erro ao buscar agendamento de equipamento");
      const data = await response.json();
      const filteredData = data.filter(
        (item) => item.cod_eqp.toString() === formData.cod_eqp
      );
      setConsulta2(filteredData);
    } catch (error) {
      console.error("Erro ao buscar agendamento de equipamento:", error);
    }
  };

  const formattedDate = (data) => {
    if (data) {
      return new Date(data).toISOString().split("T")[0];
    } else return "";
  };

  const viewDate = (data) => {
    if (data) {
      console.log("Data: ", data)

      const dateStr = formattedDate(data); // Retorna uma string no formato aaaa-mm-dd
      const [year, month, day] = dateStr.split("-"); // Desestrutura a string
      return `${day}/${month}/${year}`; // Retorna no formato dd/mm/aaaa
    } else {
      return "Data não encontrada";
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className={styles.header}>
        <Image className={styles.logo} src={Logo} width={110} height={60} />
        <br />
        <h1 className={styles.titulo}>Agendamentos Realizados</h1>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Seleção de Sala */}
      <div className={styles.disposicaoVisualizacao}>
        <h3 className={styles.h3Visualizacao}>SALAS</h3>
        <form onSubmit={handleSubmitSala} className={styles.disposicaoFormEquip}>
          <select className={styles.select}
            name="cod_sala"
            value={formData.cod_sala}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma sala</option>
            {salas.map((sala) => (
              <option key={sala.cod_sala} value={sala.cod_sala}>
                {sala.nome_sala}
              </option>
            ))}
          </select>

          <button className={styles.procurar} type="submit">PROCURAR</button>
        </form>
      </div>
      <br />

      {/* Resultados da Consulta de Sala */}
      {salaConsulta.length > 0 && (
        <div className={styles.divtal}>
          <h3 className={styles.h3Visualizacao}>Resultados da Sala</h3>
          {salaConsulta.map((item, index) => (
            <li className={styles.linha} key={index}>

              <div className={styles.data}> {viewDate(item.data_sel1)}</div>
            <br/>
              {item.nome_prof} - {item.disciplina1}. <br /> <br />

              <div className={styles.centro}>
                {item.turma1} <br /> <br />
              </div>

              <div className={styles.centro2}>
                {item.hr_entrada1} - {item.hr_saida1}<br /><br />
              </div>

            </li>
          ))}
        </div>
      )}
      <hr className={styles.linha1}></hr>

      {/* Seleção de Equipamento */}
      <div className={styles.disposicaoVisualizacao1}>
        <h3 className={styles.h3Visualizacao}>EQUIPAMENTOS</h3>
        <form onSubmit={handleSubmitEquipamento} className={styles.disposicaoFormEquip}>
          <select className={styles.select}
            name="cod_eqp"
            value={formData.cod_eqp}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um equipamento</option>
            {equipamentos.map((equipamento) => (
              <option key={equipamento.cod_eqp} value={equipamento.cod_eqp}>
                {equipamento.descricao}
              </option>
            ))}
          </select>

          <button className={styles.procurar} type="submit">PROCURAR</button>
        </form>
      </div>
      <br />

      {/* Resultados da Consulta de Equipamento */}
      {equipamentoConsulta.length > 0 && (
        <div className={styles.divtal}>
          <h3 className={styles.h3Visualizacao}>Resultados do Equipamento</h3>

          {equipamentoConsulta.map((item, index) => (
            <li className={styles.linha} key={index}>
                 <div className={styles.data}> {viewDate(item.dtinicio)}</div>
                 <br/>
              {item.nome_prof} - {item.disciplina2}. <br /> <br />

              <div className={styles.centro}>
                {item.turma2} <br /> <br />
              </div>

              <div className={styles.centro2}>
                {item.hr_entrada2} - {item.hr_saida2}<br />
              </div>
            </li>
          ))}

        </div>
      )}
<br />
<br />
<br />
<br />
<br />
      <button className={styles.botaoVoltar}>
        <Link className={styles.link} href="/deletaragendamentos">
          Excluir agendamentos
        </Link>
      </button>
      <br />
      <button className={styles.botaoVoltar}>
        <Link className={styles.link} href="/pagInicialSalas">
          Voltar para página de agendamentos
        </Link>
      </button>
      <Footer />
    </div>
  );
}

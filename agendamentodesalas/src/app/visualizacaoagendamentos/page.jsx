"use client"
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
  const [formData, setFormData] = useState({});

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

    const handleClick = async () => {
      try {
        const response = await fetch("http://localhost:3001/sala_consulta");
        if (!response.ok) throw new Error("Erro ao buscar agendamento");
  
        const data = await response.json();
        setConsulta1(data);
      } catch (error) {
        console.error("Erro ao buscar agendamento:", error);
      }
    };

    handleClick();
    fetchSala();
    fetchEquipamento();
  }, []);
 

  // Atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      <br/>
      <br/>
      <br />
      {/* CONTEUDO */}

      {/* Filtros */}
      <div className={styles.disposicaoVisualizacao}>
<<<<<<< HEAD
        <h3 className={styles.h3Visualizacao}>Selecione a sala que você quer visualizar.</h3>
        <form onSubmit={handleSubmit} className={styles.disposicaoFormEquip}>
        {/* Campo de Seleção de Professor */}
        <label>Nome da sala:</label>
        <select
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
=======
        <h3 className={styles.h3Visualizacao}>
          Selecione o agendamento que você quer visualizar.
        </h3>
        <label>Escolher agendamento: </label>
        <br />
        <select className={styles.selectVisualizacao}>
          <option>teste</option>
          <option>teste1</option>
          <option>teste2</option>
          <option>teste3</option>
         
>>>>>>> 414062199e42c2657052df69fa857865ac140b38
        </select>
 
        {salaConsulta.map((sala_consulta) => (
        <button key={sala_consulta.cod_sala} value={sala_consulta.cod_sala}>
        {sala.nome_sala} 
  PROCURAR</button>

        </form>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.disposicaoVisualizacao}>
        <h3 className={styles.h3Visualizacao}>Selecione o equipamento que você quer visualizar.</h3>
        <form onSubmit={handleSubmit} className={styles.disposicaoFormEquip}>
        {/* Campo de Seleção de Professor */}
        <label>Nome do equipamento:</label>
        <select
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

        <button type="submit">PROCURAR</button>

        </form>
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <br/>

      {/* EXIBIÇÃO DOS AGENDAMENTOS */}

      <br />
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

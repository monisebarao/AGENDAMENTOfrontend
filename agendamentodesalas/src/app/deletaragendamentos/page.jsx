"use client";
import styles from "@/app/page.module.css";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/sesilogo.png";
import styless from "@/app/pagInicialSalas/page.module.css";
import { useState, useEffect } from "react";

export default function Form() {
    const [agendas1, setAgendas1] = useState([]);
    const [agendas2, setAgendas2] = useState([]);
    const [formData, setFormData] = useState({cod_sala: "", cod_eqp: "" });
  
    // Carregar a lista de professores da API quando o componente é montado
    useEffect(() => {
        const fetchAgenda1 = async () => {
            try {
                const response = await fetch(`http://localhost:3001/agenda1/`);
                if (!response.ok) throw new Error("Erro ao buscar agendamento");
  
                const data = await response.json();
                setAgendas1(data);
            } catch (error) {
                console.error("Erro ao buscar agendamento:", error);
            }
        };
        const fetchAgenda2 = async () => {
            try {
                const response = await fetch(`http://localhost:3001/agenda2/`);
                if (!response.ok) throw new Error("Erro ao buscar agendamento");
  
                const data = await response.json();
                setAgendas2(data);
            } catch (error) {
                console.error("Erro ao buscar agendamento:", error);
            }
        };

        fetchAgenda1();
        fetchAgenda2();
    }, []);
  
    // Atualizar os valores do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    // Submeter o formulário
    const handleSubmit1 = async (e) => {
        e.preventDefault();
  
        // Verificar os dados do formulário antes de enviar
        console.log("Dados do formulário antes do envio:", formData);
  
        try {
            const response = await fetch(`http://localhost:3001/agenda1/${formData.agenda1_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
  
            if (response.ok) {
                alert("Agendamento deletado com sucesso!"); // Mensagem de sucesso
                setFormData({
                    agenda1_id: ""
                });
            } else {
                throw new Error("Erro ao realizar a exclusão");
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error.message);
            alert("Erro ao realizar a exclusão");
        }
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();
  
        // Verificar os dados do formulário antes de enviar
        console.log("Dados do formulário antes do envio:", formData);
  
        try {
            const response = await fetch(`http://localhost:3001/agenda2/${formData.agenda2_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
  
            if (response.ok) {
                alert("Agendamento deletado com sucesso!"); // Mensagem de sucesso
                setFormData({
                    agenda2_id: ""
                });
            } else {
                throw new Error("Erro ao realizar a exclusão");
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error.message);
            alert("Erro ao realizar a exclusão");
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
        <view>
            <div className={styles.divpai}>
                <div className={styles.linha}>
                    <Image className={styles.logo} src={Logo} width={103} height={60} />
                    <div className={styles.dropdown}></div>
                </div>
            </div>
            <br />

            <div className={styles.headerconteiner}>
                <div className={styles.titulo}>
                    <h1 className={styles.tituloPrincipal}>DELETAR</h1>
                    <h3 className={styles.bemVindos}>Agendamentos</h3>
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
                    <h3>Exclua um agendamento aqui!</h3>
                </section>
                <br />

                <form className={styles.disposicaoFormcadast} onSubmit={handleSubmit1}>
                    <label>Escolha um agendamento de sala:</label>
                    <br/>
                    <select
                        name="agenda1_id"
                        value={formData.agenda1_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione um agendamento</option>
                        {agendas1.map((agenda1) => (
                            <option key={agenda1.agenda1_id} value={agenda1.agenda1_id}>
                                {agenda1.nome_sala}, {agenda1.nome_prof}, {viewDate(agenda1.data_sel1)}, {agenda1.hr_entrada1}, {agenda1.hr_saida1}, {agenda1.turma1}, {agenda1.disciplina1}
                            </option>
                        ))}
                    </select>
<br/>
<br/>
                    {/* BOTAO SUBMIT */}
                    <div className={styles.container}>
                        <button className={styles.botaoFormcadast}>DELETAR CADASTRO</button>
                    </div>
                </form>
                
                <br />
                <br />

                <form className={styles.disposicaoFormcadast} onSubmit={handleSubmit2}>
                    <label>Escolha um agendamento de equipamento:</label>
                    <br/>
                    <select
                        name="agenda2_id"
                        value={formData.agenda2_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione um agendamento</option>
                        {agendas2.map((agenda2) => (
                            <option key={agenda2.agenda2_id} value={agenda2.agenda2_id}>
                                {agenda2.nome_sala}, {agenda2.nome_prof}, {viewDate(agenda2.data_sel2)}, {agenda2.hr_entrada2}, {agenda2.hr_saida2}, {agenda2.turma2}, {agenda2.disciplina2}
                            </option>
                        ))}
                    </select>
<br/>
<br/>
                    {/* BOTAO SUBMIT */}
                    <div className={styles.container}>
                        <button className={styles.botaoFormcadast}>DELETAR CADASTRO</button>
                    </div>
                </form>

                <Footer />
            </div>
        </view>
    );
}
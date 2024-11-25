"use client";
import styles from "@/app/page.module.css";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/sesilogo.png";
import styless from "@/app/pagInicialSalas/page.module.css";
import { useState, useEffect } from "react";

export default function Form() {
    const [professores, setProfessores] = useState([]);
    const [formData, setFormData] = useState({
        id_prof: "",
    });

    // Carregar a lista de professores da API quando o componente é montado
    useEffect(() => {
        const fetchProfessores = async () => {
            try {
                const response = await fetch(`http://localhost:3001/professor/`);
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
            const response = await fetch(`http://localhost:3001/professor/${formData.id_prof}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Professor deletado com sucesso!"); // Mensagem de sucesso
                setFormData({
                    id_prof: ""
                });
            } else {
                throw new Error("Erro ao realizar a exclusão");
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error.message);
            alert("Erro ao realizar a exclusão");
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
                    <h3>Exclua um professor aqui!</h3>
                </section>
                <br />
                <form className={styles.disposicaoFormcadast} onSubmit={handleSubmit}>
                    <label>Nome do professor:</label>
                    <br />
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

<br/>
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
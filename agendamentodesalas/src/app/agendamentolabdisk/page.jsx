"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import styles from '@/app/pagInicialEquipamentos/page.module.css'


function agendaLabdisk() {
  //     const [disciplina, setDisciplina] = useState("");

  //   const handleChange = (event) => {
  //     setDisciplina(event.target.value);
  //   };

  return (
    <div>
      <Header />

      <section className={styles.disposicaoNav}>
        <div className={styles.salaNav}>
          <Link href="/pagInicialSalas" className={styles.Link}>SALAS</Link>
        </div>

        <div className={styles.equipNav}>
          <Link href="/pagInicialEquipamentos" className={styles.Link}>EQUIPAMENTOS</Link>
        </div>
      </section>
      <br />

      {/* TITULO */}
      <section className={styles.tituloGeral}>
        <h3>LABDISKS</h3>
      </section>

      <br />

      {/* FORMULARIO */}

      <form
        //  action=""
        className={styles.disposicaoFormEquip}
      >
        <div>
          <label>Nome do(a) professor(a) responsável:</label>
          <br />
          <input type="text" name="nomeProf" />
        </div>
        <br />

        <div>
          <label>Disciplina:</label>
          <br />
          <select
          // value={disciplina}
          // onChange={handleChange}
          >
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
            <option>Programação e Robótica</option>
            <option>Tópicos Avançados</option>
            <option>Trilha de Produção de Texto</option>
          </select>
        </div>
        <br />

        <div>
          <label>Horário de início:</label>
          <br />
          <input type="time" name="horário" min="07:00" max="18:00" required />
        </div>
        <br />

        <div>
          <label>Horário de término:</label>
          <br />
          <input type="time" name="horário" min="07:00" max="18:00" required />
        </div>
        <br />

        <div>
          <label>Turma:</label>
          <br />
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
            <option>Tópicos Avançados</option>
            <option>Trilha de produção de texto</option>
          </select>
        </div>
        <br />

        <div>
          <label>Quantidade:</label>
          <br />
          <input type="number" name="quantidade" />
        </div>

        <br />
        <br />

        <br />

        {/* BOTAO SUBMIT */}
        <section>
          <button className={styles.botaoForm}>
            <Link href="/visualizacaoagendamentos" className={styles.Link}>REALIZAR AGENDAMENTO</Link>
          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}

export default agendaLabdisk;

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from '@/app/pagInicialEquipamentos/page.module.css'

export default function Form() {
  return (
    <div>
      <Header />

      {/* NAVEGAÇÃO */}
      <section className={styles.disposicaoNav}>
        <div className={styles.salaNav}>
          <Link href="/pagInicialSalas" className={styles.Link}>SALAS</Link>
        </div>

        <div className={styles.equipNav}>
          <Link href="/pagInicialEquipamentos" className={styles.Link}>EQUIPAMENTOS</Link>
        </div>
      </section>

      <br />
      <br />

      {/* TITULO PAGINA */}
      <section className={styles.tituloGeral}>
        <h3>BIBLIOTECA</h3>
      </section>

      <form className={styles.disposicaoFormSalas}>
        <label>
          Nome do professor:
          <br/>
          <input type="text" name="name" />
        </label>
        <br />
        <br/>

        <label>Disciplina:</label>
        <select
        // value={disciplina} onChange={handleChange}
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
          <option>Mentoria para o futuro</option>
          <option>Mundo do trabalho e empreendedorismo</option>
          <option>Programação e Robótica</option>
          <option>Tópicos avançados</option>
          <option>Mundo do trabalho e empreendedorismo</option>
          <option>Trilha de produção de texto</option>
          <option>Mentoria para o futuro</option>
        </select>
        <br />

        <label for='data'>Data:</label>
        <input type="date" id='data' name='data'></input>
        <br/>

        <label for="appt">Horário de início:</label>
        <input type="time" id="appt" name="appt"></input>
        <br />

        <label for="appt">Horário de término:</label>
        <input type="time" id="appt" name="appt"></input>
<br/>
        <label>Turma:</label>
        <select
        //  value={turma} onChange={handleChange}
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

        {/* BOTAO SUBMIT */}
        <section>

          <br/>
          <br/>

          <button className={styles.botaoForm}>
            <Link href="/visualizacaoagendamentos" className={styles.Link}>REALIZAR AGENDAMENTO</Link>

          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}

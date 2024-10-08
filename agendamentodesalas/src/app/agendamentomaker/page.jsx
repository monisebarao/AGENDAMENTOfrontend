import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Form() {
  return (
    <div>
      <Header />

      {/* NAVEGAÇÃO */}
      <section className="disposicaoNav">
        <div className="salaNav">
          <Link href="/">SALAS</Link>
        </div>

        <div className="equipNav">
          <Link href="/pagInicialEquipamentos">EQUIPAMENTOS</Link>
        </div>
      </section>

      <br />
      <br />

      {/* TITULO PAGINA */}
      <section className="tituloGeral">
        <h3>ESPAÇO MAKER</h3>
      </section>

      <br />

      <form className="disposicaoFormSalas">
        <label>
          Nome do professor:
          <input type="text" name="name" />
        </label>
        <br />

        <label>Disciplina:</label>
        <select
        // value={disciplina} onChange={handleChange}
        >
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
        <br />


        <label for="appt">Horário de inicio:</label>
        <input type="time" id="appt" name="appt"></input>
        <br />

        <label for="appt">Horário de término:</label>
        <input type="time" id="appt" name="appt"></input>
        <br />

        <label>Turma:</label>
        <select
        // value={turma} onChange={handleChange}
        >
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
          <button className="botaoForm">
            <Link href="/visualizacaoagendamentos">REALIZAR AGENDAMENTO</Link>
          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}

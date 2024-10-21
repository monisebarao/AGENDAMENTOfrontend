"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

function agendaLim() {
  //     const [disciplina, setDisciplina] = useState("");

  //   const handleChange = (event) => {
  //     setDisciplina(event.target.value);
  //   };

  return (
    <div>
      <Header />

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

      {/* TITULO */}
      <section className="tituloGeral">
        <h3>LABORATÓRIO MÓVEL DE INFORMÁTICA</h3>
      </section>

      <br />

      {/* FORMULARIO */}

      <form
        //  action=""
        className="disposicaoFormEquip"
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
            <option>Tópicos avançados</option>
            <option>Mundo do trabalho e empreendedorismo</option>
            <option>Trilha de produção de texto</option>
            <option>Mentoria para o futuro</option>
          </select>
        </div>

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
        </div>
        <br />

        <div>
          <label>Quantidade de equipamentos:</label>
          <br />
          <input type="number" name="quantidade" />
        </div>

        <br />
        <br />

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

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<formEquip/>);

export default agendaLim;

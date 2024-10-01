"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";

function agendaLabdisk() {
  //     const [disciplina, setDisciplina] = useState("");

  //   const handleChange = (event) => {
  //     setDisciplina(event.target.value);
  //   };

  return (
    <div>
      <Header />

      <section className="disposicaoNav">
        <div className="salaNav">
          <a href="./">SALAS</a>
        </div>

        <div className="equipNav">
          <a href="./pagInicialEquipamentos">EQUIPAMENTOS</a>
        </div>
      </section>
      <br />

      {/* TITULO */}
      <section className="tituloGeral">
        <h3>LABDISKS</h3>
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
          <label>Quantidade:</label>
          <br />
          <input type="number" name="quantidade" />
        </div>

        <br />
        <br />

        <br />

        {/* BOTAO SUBMIT */}
        <section>
          <button
            // href={props.linkAgenda}
            // className=""
            type="submit"
            className="botaoForm"
          >
            Realizar Agendamento
          </button>
        </section>
      </form>

      <Footer />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<formEquip/>);

export default agendaLabdisk;

'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";

function agendaComputadorSenai() {
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
      <br/>

    {/* FORMULARIO */}

    <div>
      {/* TITULO */}
      <section className="tituloGeral">
        <h3>COMPUTADORES DA SALA DO CURSO TÉCNICO- SALA 1</h3>
      </section>

      <br />

      {/* FORMULARIO */}
      <section>
        <form
        //  action=""
        >
          <div>
            <label>Nome do professor(a) responsável:</label>
            <input type="text" name="nomeProf" />
          </div>

          <div>
            <label>Disciplina:</label>
            <select value={disciplina} onChange={handleChange}>
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
              <option></option>
            </select>
          </div>

          <div>
            <label>Horário:</label>
            <input type="time" name="horário" />
          </div>

          <div>
            <label>Turma:</label>
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

          <div>
            <label>Quantidade:</label>
            <input type="number" name="quantidade" />
          </div>

          

          {/* BOTAO SUBMIT */}
          <section>
            <button
              href={props.linkAgenda}
              // className=""
              type="submit"
            >
              Realizar Agendamento
            </button>
          </section>
        </form>
      </section>
    </div>


      <Footer />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<formEquip/>);

export default agendaComputadorSenai;

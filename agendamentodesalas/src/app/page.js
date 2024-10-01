// import Header from "@/components/header";
// import Card from "@/components/cards";
// import Footer from "@/components/footer";
// import Link from "next/link";

// import lmt from "../public/lmt.jpeg";
// import maker from "../public/salamaker.jpeg";
// import biblioteca from "../public/biblioteca.jpeg";
// import labfisica from "../public/labfisica.jpeg";
// import labquibio from "../public/labquibio.jpeg";
// import senai from "../public/salasenai.jpeg";

// export default function Corpo() {
//   return (
//     <div>
//       {/* HEADER */}
//       <Header />

//       {/* NAVEGAÇÃO */}
//       <section className="disposicaoNav">
//         <div className="salaNav">
//           <a href="./">SALAS</a>
//         </div>

//         <div className="equipNav">
//           <Link href='./pagInicialEquipamentos'>EQUIPAMENTOS</Link>
//         </div>
//       </section>

//       <br />
//       <br />
//       <br />

//       {/* TITULO PAGINA */}
//       <section className="tituloGeral">
//         <h3>Faça seu agendamento aqui</h3>
//       </section>

//       {/* SEÇÃO CARDS */}
//       <section className="disposicaoCards">
//         <Card
//           image={lmt}
//           alt="lmt"
//           title="LABORATÓRIO DE MÍDIAS E TECNOLOGIAS (LMT)"
//           width={240}
//           height={177}
//           // link={}
//           />

//         <Card
//           image={maker}
//           alt="maker"
//           title="SALA MAKER"
//           width={240}
//           height={177}
//           // link={}
//         />

//         <Card
//           image={biblioteca}
//           alt="biblio"
//           title="BIBLIOTECA"
//           width={240}
//           height={177}
//           link={"./agendamentobiblioteca"}

//         />

//         <Card
//           image={labfisica}
//           alt="labfisica"
//           title="LABORATÓRIO DE FÍSICA"
//           width={240}
//           height={177}
//           // link={}

//         />

//         <Card
//           image={labquibio}
//           alt="labquibio"
//           title="LABORATÓRIO DE QUÍMICA E BIOLOGIA"
//           width={240}
//           height={177}
//           // link={}

//         />

//         <Card
//           image={senai}
//           alt="senai"
//           title="SALA DO CURSO TÉCNICO - SENAI"
//           width={240}
//           height={177}
//           // link={}

//         />
//       </section>

//       <br />

//       {/* BOTAO VISUALIZAÇÃO DOS AGENDAMENTOS REALIZADOS */}
//       <section className="disposicaoBotao">
//         <button className="visuBotao">Visualizar agendamentos realizados</button>
//         {/* colocar o onclick dps */}

//       </section>

//       <br />

//       <Footer />
//     </div>
//   );
// }

"use client";

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
      <br />

      {/* TITULO */}
      <section className="tituloGeral">
        <h3>COMPUTADORES DA SALA DO CURSO TÉCNICO - SALA 1</h3>
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

export default agendaComputadorSenai;

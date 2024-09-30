import Header from "@/components/header";
import Card from "@/components/cards";
import Footer from "@/components/footer";
import Link from "next/link";


import lmt from "../public/lmt.jpeg";
import maker from "../public/salamaker.jpeg";
import biblioteca from "../public/biblioteca.jpeg";
import labfisica from "../public/labfisica.jpeg";
import labquibio from "../public/labquibio.jpeg";
import senai from "../public/salasenai.jpeg";

export default function Corpo() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* NAVEGAÇÃO */}
      <section className="disposicaoNav">
        <div className="salaNav">
          <a href="./">SALAS</a>
        </div>

        <div className="equipNav">
          <Link href="/pagInicialEquipamentos/page.jsx">EQUIPAMENTOS</Link>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* TITULO PAGINA */}
      <section className="tituloGeral">
        <h3>Faça seu agendamento aqui</h3>
      </section>

      {/* SEÇÃO CARDS */}
      <section className="disposicaoCards">
        <Card
          image={lmt}
          alt="lmt"
          title="LABORATÓRIO DE MÍDIAS E TECNOLOGIAS (LMT)"
          width={240}
          height={177}
          // link={}
          />

        <Card
          image={maker}
          alt="maker"
          title="SALA MAKER"
          width={240}
          height={177}
          // link={}
        />

        <Card
          image={biblioteca}
          alt="biblio"
          title="BIBLIOTECA"
          width={240}
          height={177}
          link={"./agendamentobiblioteca"}

        />

        <Card
          image={labfisica}
          alt="labfisica"
          title="LABORATÓRIO DE FÍSICA"
          width={240}
          height={177}
          // link={}

        />

        <Card
          image={labquibio}
          alt="labquibio"
          title="LABORATÓRIO DE QUÍMICA E BIOLOGIA"
          width={240}
          height={177}
          // link={}

        />

        <Card
          image={senai}
          alt="senai"
          title="SALA DO CURSO TÉCNICO - SENAI"
          width={240}
          height={177}
          // link={}

        />
      </section>

      <br />

      {/* BOTAO VISUALIZAÇÃO DOS AGENDAMENTOS REALIZADOS */}
      <section className="disposicaoBotao">
        <button className="visuBotao">Visualizar agendamentos realizados</button>
        {/* colocar o onclick dps */}
       
      </section>

      <br />

      <Footer />
    </div>
  );
}


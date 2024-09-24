import Card from "@/components/cards";
import Header from "@/components/header";
// import Link from "next/link";

import lim from "@/public/lim.jpeg";
import compSenai from "@/public/computadorsenai.jpeg";
import legoFundI from "@/public/maletafund1.jpeg";
import legoFundII from "@/public/maletafund2.jpeg";
import som from "@/public/caixadesom.jpeg";
import labdisk from "@/public/labdisks.jpeg";
import Footer from "@/components/footer";

function Corpo2() {
  return (
    <div>
      <Header />

      <section className="disposicaoNav">
        <div className="salaNav">
          <a href="./">SALAS</a>
        </div>

        <div className="equipNav">
          <a href="">EQUIPAMENTOS</a>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section className="tituloGeral">
        <h3>Faça seu agendamento aqui</h3>
      </section>

      <section className="disposicaoCards">
        <Card
          image={lim}
          alt="lim"
          title="LABORATÓRIO DE INFORMÁTICA MOVEL (LIM)"
          width={240}
          height={177}
          //   link={}
        />

        <Card
          image={compSenai}
          alt="compSenai"
          title="COMPUTADORES DA SALA DO CURSO TÉCNICO - SALA 1"
          width={240}
          height={177}
          //   link={}
        />

        <Card
          image={legoFundI}
          alt="legoFundI"
          title="MALETA LEGO - FUNDAMENTAL I"
          width={240}
          height={177}
          //   link={}
        />

        <Card
          image={legoFundII}
          alt="legoFundII"
          title="MALETA LEFO - FUNDAMENTAL II"
          width={240}
          height={177}
          //   link={}
        />

        <Card
          image={som}
          alt="som"
          title="CAIXA DE SOM"
          width={240}
          height={177}
          //   link={}
        />

        <Card
          image={labdisk}
          alt="labdisk"
          title="LABDISK"
          width={240}
          height={177}
          //   link={}
        />
      </section>

      <br />

      <section className="disposicaoBotao">
        <button className="visuBotao">
          Visualizar agendamentos realizados
        </button>
      </section>

      <br />

      <Footer />
    </div>
  );
}

export default Corpo2;

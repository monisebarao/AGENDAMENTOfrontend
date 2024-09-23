import Header from "@/components/header";
import Card from "@/components/cards";
import Footer from "@/components/footer";

import lmt from "../public/lmt.jpeg";
import maker from "../public/salamaker.jpeg";
import biblioteca from "../public/biblioteca.jpeg";
import labfisica from "../public/labfisica.jpeg";
import labquibio from "../public/labquibio.jpeg";
import senai from "../public/salasenai.jpeg";

export default function Corpo() {
  return (
    <div>
      <Header />

      <section>
        <Card
          image={lmt}
          alt="lmt"
          title="LABORATÓRIO DE MÍDIAS E TECNOLOGIAS (LMT)"
          width={}
          height={}
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={maker}
          alt="maker"
          title="SALA MAKER"
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={biblioteca}
          alt="biblio"
          title="BIBLIOTECA"
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={labfisica}
          alt="labfisica"
          title="LABORATÓRIO DE FÍSICA"
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={labquibio}
          alt="labquibio"
          title="LABORATÓRIO DE QUÍMICA E BIOLOGIA"
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={senai}
          alt="senai"
          title="SALA DO CURSO TÉCNICO - SENAI"
          // onClick={() => console.log('Card clicked!')}
        />
      </section>

      <Footer />
    </div>
  );
}

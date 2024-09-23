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
          width={200}
          height={220}
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={maker}
          alt="maker"
          title="SALA MAKER"
          width={200}
          height={220}
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={biblioteca}
          alt="biblio"
          title="BIBLIOTECA"
          width={200}
          height={220}
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={labfisica}
          alt="labfisica"
          title="LABORATÓRIO DE FÍSICA"
          width={200}
          height={220}
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={labquibio}
          alt="labquibio"
          title="LABORATÓRIO DE QUÍMICA E BIOLOGIA"
          width={200}
          height={220}
          // onClick={() => console.log('Card clicked!')}
        />

        <Card
          image={senai}
          alt="senai"
          title="SALA DO CURSO TÉCNICO - SENAI"
          width={200}
          height={220}
          // onClick={() => console.log('Card clicked!')}
        />
      </section>

      <Footer />
    </div>
  );
}

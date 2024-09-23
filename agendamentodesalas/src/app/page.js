import Header from "@/components/header";
import Card from "../components/cards";
import Footer from "@/components/footer";
import styles from "@/app/page.module.css";
import Image from "next/image";

// import lmtImage from "../public/lmt.jpeg"
// import makerImage from "../public/salamaker.jpeg"
// import bibliotecaImage from "../public/biblioteca.jpeg"
// import labfisicaImage from "../public/labfisicateca.jpeg"
// import salasenaiImage from "../public/salasenai.jpeg"
// import labquibioImage from "../public/labquibio.jpeg"

export default function Corpo() {
  return (
    <div>
      <Header />

      {/* CARDS AGENDAMENTO SALAS */}
      <section className={styles.disposicaocards}>
        <Card
          alt="lmt"
          title="LABORATÓRIO DE MÍDIAS E TECNOLOGIAS (LMT)"
          //   onClick={() => console.log('Card clicked!')}
        />

        <></>

        <Card
          image="/salamaker.jpeg"
          alt="maker"
          title="SALA MAKER"
          // onClick={() => console.log('Card clicked!')}
        />

        <></>

        <Card
          image="/biblioteca.jpeg"
          alt="biblioteca"
          title="BIBLIOTECA"
          // onClick={() => console.log('Card clicked!')}
        />

        <></>

        <Card
          image="/labfisicateca.jpeg"
          alt="labfisica"
          title="LABORATÓRIO DE FÍSICA"
          // onClick={() => console.log('Card clicked!')}
        />

        <></>

        <Card
          image="/labquibio.jpeg"
          alt="labquibio"
          title="LABORATÓRIO DE BIOLOGIA E QUÍMICA"
          // onClick={() => console.log('Card clicked!')}
        />

        <></>

        <Card
          image="/salasenai.jpeg"
          alt="salasenai"
          title="SALA DO CURSO TÉCNICO - SENAI"
          // onClick={() => console.log('Card clicked!')}
        />
      </section>

      <></>
      <Footer />
    </div>
  );
}

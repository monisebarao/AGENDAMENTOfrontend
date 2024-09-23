import Header from "@/components/header";
import Card from "@/components/cards";
import Footer from "@/components/footer";

export default function Corpo() {
  return (
    <div className={style.fundo}>
      <Header/>
      <Card
        image="https://example.com/image.jpg"
        alt="An example image"
        title="Example Card"
        description="This is an example card component"
        onClick={() => console.log('Card clicked!')}
      />
      <Footer/>
    </div>
  );
}

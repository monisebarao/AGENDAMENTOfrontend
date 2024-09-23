import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div>
        <hr />
      </div>

      <Image
        source={require("../public/sesilogo.png")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      ></Image>

      <div>
        <h1 style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          AGENDAMENTOS
        </h1>
        <h3 style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Seja bem-vindo(a)!
        </h3>
      </div>
    </div>
  );
};

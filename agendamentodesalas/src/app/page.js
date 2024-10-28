
import Image from "next/image";
import logo from "@/public/sesilogo.png";
import Link from "next/link";


export default function Login() {
  return (
    <div className="corpo">
      <Image src={logo} alt="logo sesi" width="100" height="50" />

      <br />
      <div className="disposicaoForm">

      <h1 className="bemVindos">BEM-VINDO(A)</h1>
      <h3 className="saudacao">
        Faça seu login para acessar o sistema de agendamentos!
      </h3>

        <form className="form">
          <label>Insira seu e-mail:</label>
          <br />
          <input type="text" required/>
          <br />
          <br />
          <label>Insira sua senha:</label>
          <br />
          <input type="password" required/>
          <br />
          <br />
          <br />

          <button>
            <Link className='formLink' href="/pagInicialSalas">Entrar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
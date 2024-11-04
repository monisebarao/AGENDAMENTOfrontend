"use client"; // Isso é necessário para indicar que este componente é um componente do lado do cliente
import { useState } from "react";
import Image from "next/image"; 
import logo from "@/public/sesilogo.png";

const info = [


  { 
    email: "flavia.nascimento2@portalsesisp.org.br", 
    senha: "01046177" 
  },

  { 
    email: "rafael.sorensen@portalsesisp.org.br", 
    senha: "01084394" 
  },
  
  {
    email: "eduardo.assis2@portalsesisp.org.br",
    senha: "01051563",
  },

  {
    email: "camila-penteado@portalsesisp.org.br",
    senha: "01083819",
  },

  {
    email: "erica.cassoli@portalsesisp.org.br",
    senha: "00142662",
  },

  {
    email: "lucas-pontes@portalsesisp.org.br",
    senha: "01090274",
  },

  {
    email: "lucas-rocha5@portalsesisp.org.br",
    senha: "01081039",
  },

  {
    email: "rita.bordoni@portalsesisp.org.br",
    senha: "01075688",
  },

  {
    email: "victor-hunger@portalsesisp.org.br",
    senha: "01090513",
  },

  {
    email: "marcia.torres@portalsesisp.org.br",
    senha: "00755257",
  },

  {
    email: "flavia.vianna@portalsesisp.org.br",
    senha: "01092294",
  },

  { 
    email: "carla.assis@portalsesisp.org.br ", 
    senha: "01021999" 
  },

  {
    email: "cleide.araujo@portalsesisp.org.br",
    senha: "01008451",
  },

  {
    email: "samara.faver@portalsesisp.org.br",
    senha: "01072469",
  },

  {
    email: "salvador.filho@portalsesisp.org.br",
    senha: "00791342",
  },

  {
    email: "salvador.filho@portalsesisp.org.br",
    senha: "00791342",
  },

  {
    email: "carla.sandrin@portalsesisp.org.br",
    senha: "01064422",
  },

  {
    email: "paloma.pereira3@portalsesisp.org.br",
    senha: "01054664",
  },

  {
    email: "agda.souza@portalsesisp.org.br",
    senha: "01065778",
  },

  {
    email: "esther.silva15@portalsesisp.org.br",
    senha: "01081039",
  },

  {
    email: "kleber-antonio@portalsesisp.org.br",
    senha: "01082901",
  },

  {
    email: "alessandra.campos2@portalsesisp.org.br",
    senha: "01088907",
  },

  {
    email: "jaqueline.ribeiro@portalsesisp.org.br",
    senha: "01090083",
  },

  {
    email: " julia.milani@portalsesisp.org.br",
    senha: "01090317",
  },

  {
    email: "guilherme.basilio4@portalsesisp.org.br",
    senha: "01092671",
  },

  {
    email: "ingrid.bazetto@portalsesisp.org.br",
    senha: "01092645",
  },

  {
    email: "eunice.camargo@portalsesisp.org.br",
    senha: "01090299",
  },

  {
    email: "fernanda-saletti@portalsesisp.org.br",
    senha: "01093342",
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgError, setMsgError] = useState("");

  const handleEntrar = (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Verifica se o email e a senha correspondem a alguma entrada no array info
    const user = info.find(
      (user) => user.email === email && user.senha === senha
    );

    if (!email || !senha) {
      setMsgError("Por favor, preencha todos os campos.");
      return;
    }

    if (user) {
      // Login bem-sucedido
      const token =
        Math.random().toString(16).substr(2) +
        Math.random().toString(16).substr(2) +
        "Amamos_DS_;-)";
      localStorage.setItem("token", token);
      localStorage.setItem(
        "userLogado",
        JSON.stringify({ userCad: user.email, senhaCad: user.senha })
      );
      window.location.href = "/pagInicialSalas"; // Redirecionar após o login
    } else {
      setMsgError("Usuário ou senha incorretos");
      setEmail("");
      setSenha("");
    }
  };

  return (
    <div className="corpo">
      <Image src={logo} alt="logo-sesi" width="100" height="50" />

      <br />
      <div className="disposicaoForm">
        <h1 className="bemVindos">BEM-VINDO(A)</h1>
        <h3 className="saudacao">
          Faça seu login para acessar o sistema de agendamentos!
        </h3>

        <form className="form" onSubmit={handleEntrar}>
          <label className="formLabel">Insira seu e-mail:</label>
          <br />
          <input
            type="text"
            required
            id="emailprofs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="formInput"
          />
          <br />
          <br />
          <label className="formLabel">Insira sua senha:</label>
          <br />
          <input
            type="password"
            required
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="formInput"
          />
          
          <br />
        {msgError && <div style={{ color: "red" }}>{msgError}</div>}

          <br />
          <br />

          <button type="submit" className="formBotao">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

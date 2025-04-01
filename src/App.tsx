import { useState } from "react";
import { ButtonSubmit } from "./components/Button";

export default function App() {
  const [message, setMessage] = useState("");

  async function handleRegister(formData: FormData){
    // FAKE DELAY
    await new Promise(resolve => setTimeout(resolve, 2500));

    const nome = formData.get("nome");
    const tarefa = formData.get("tarefa");

    console.log(nome);
    console.log(tarefa);

    setMessage("Bem vindo(a) " + nome + " sua tarefa é " + tarefa);
  }

  return (
    <div>
      <h1>Form + Action</h1>

      <form action={handleRegister}>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome..."
        /><br />
        <input
          type="text"
          name="tarefa"
          placeholder="Digite a tarefa..."
        /><br />

        <ButtonSubmit/>
      </form>

      <h2>{message}</h2>
    </div>
  )
}

/* O React 19 suporta usar a propriedade action do HTML, sem ter a necessiadade de usar o useState
para gerenciar componentes de formulário. Esse projeto vai mostrar como podemos usar as propriedades
nativas do HTML no nosso projeto React. */
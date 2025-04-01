
export default function App() {

  function handleRegister(formData: FormData){
    const nome = formData.get("nome");
    const tarefa = formData.get("tarefa");

    console.log(nome);
    console.log(tarefa);
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

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

/* O React 19 suporta usar a propriedade action do HTML, sem ter a necessiadade de usar o useState
para gerenciar componentes de formulário. Esse projeto vai mostrar como podemos usar as propriedades
nativas do HTML no nosso projeto React. */
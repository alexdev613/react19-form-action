import { useState, useTransition } from 'react';

export function NewUser() {
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleSubmit() {
    startTransition(async () => {
      try {
        // await new Promise((resolve, reject) => setTimeout(() => {
        //   // resolve("");
        //   reject("Falha ao cadastrar esse usuário!");

        // }, 2500));

        await new Promise((resolve, reject) => setTimeout(() => {
          if (Math.random() < 0.5) { // 50% de chance de erro
            reject("Falha ao cadastrar esse usuário!");
          } else {
            resolve("Sucesso!");
          }
        }, 2500));

        setUser("Bem vindo " + name);

      } catch (error) {
        if (typeof error === "string") {
          setError(error);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro desconhecido.");
        }
      }
    })
    console.log("CLICOU!")
  }

  return (
    <div>
      <h1>Conhecendo useTransition</h1>
      <label htmlFor="name">Digite seu nome:</label><br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Enviando usuário..." : "Cadastrar"}
      </button>

      {user && <p>{user}</p>}

      {error && <p>{error}</p>}
    </div>
  )
}

/* 
O useTransition não precisa estar dentro de um formulário (<form>), pois seu objetivo principal
é gerenciar estados assíncronos de forma otimizada. Ele é útil quando queremos lidar com ações
assíncronas, como requisições HTTP ou operações que podem demorar para obter uma resposta.

Diferente do useState, que altera o estado imediatamente, o useTransition permite marcar
atualizações como "não urgentes", garantindo que a UI continue responsiva enquanto a
operação assíncrona ocorre. 

Além de ser usado em formulários, o useTransition pode ser aplicado em qualquer elemento
interativo, como botões, listas e outros componentes que lidam com grandes quantidades
de dados ou atualizações de estado demoradas.
*/

import { useActionState } from 'react';

type StateType = {
  text: string;
} | null

export function ActionState() {
  async function handleSubmit(prevState: StateType, formData: FormData): Promise<StateType> {
    
    await new Promise((resolve) => setTimeout(() => resolve("Success!"), 2500));

    const nome = formData.get("nome") as string;

    console.log(prevState); // O primeiro valor será 'null', pois definimos 'null' como o estado inicial no useActionState.
    // Depois, a cada submissão do formulário, ele mostrará o estado anterior antes de ser atualizado.
    // OBS: O `prevState` não é obrigatório ser usado, mas pode ser útil para acessar ou comparar o estado anterior antes de definir um novo.

    if (!nome || nome.length < 4) {
      return {
        text: "DIGITE UM NOME MAIOR!"
      }
    }

    return {
      text: `Bem vindo(a) ${nome}`,
    }

  }

  // useActionState retorna um array com o estado e a função para manipular o formulário
  const [state, formAction, pending] = useActionState(handleSubmit, null);

  return (
    <div>
      <h1>useActionState</h1>

      <form action={formAction} >
        <input
          type="text"
          placeholder='Digite seu nome'
          name='nome'
        />

        <button type='submit' disabled={pending}>
          {pending ? "Enviando..." : "Cadastrar"}
        </button>
      </form>

      {state && <h1>{state.text}</h1>}
    </div>
  )
}

/* 
  O `useActionState` é um hook do React 19 que gerencia o estado de ações assíncronas em formulários.

  Ele recebe dois parâmetros:
  1️⃣ Uma função assíncrona (handleSubmit) que processa os dados do formulário e retorna um novo estado.
  2️⃣ O estado inicial, que pode ser `null` ou qualquer outro valor.

  Como funciona?
  - Quando o formulário é submetido, `handleSubmit` recebe: ✅✅✅✅✅✅✅✅✅
    🔹 `prevState`: O estado anterior da ação.
    🔹 `formData`: Os dados enviados pelo formulário.

  - O retorno de `handleSubmit` atualiza automaticamente o estado (`state`).

  - A função `formAction`, gerada pelo `useActionState`, deve ser passada como `action` no formulário.
*/


/* Explicação do prevState
✅ O prevState é um parâmetro opcional que o useActionState fornece para a função de manipulação da ação.
✅ Você não precisa usá-lo sempre, mas ele pode ser útil, por exemplo, para:

Comparar o estado anterior e o novo estado antes de atualizar.

Manter um histórico de estados (caso precise concatenar ou acumular informações).

Evitar atualizações desnecessárias se o novo estado for idêntico ao anterior.
*/

/*
🔹 Explicação do `pending`
  ✅ `pending` é um booleano que indica se a ação está em andamento.
  ✅ Ele é `true` enquanto `handleSubmit` está executando e `false` quando termina.
  ✅ Usamos `pending` para desativar o botão enquanto a submissão acontece, evitando múltiplos envios.
*/
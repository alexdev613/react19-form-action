import { useFormStatus } from 'react-dom';

export function ButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Enviando dados ..." : "Cadastrar"}
      </button>

      {pending && <p>Estamos enviando seu formulário!</p>}
    </div>
  )
}

/* O hook useFormStatus, é um loader, ele tem uma propriedade chamada pending que ficará true quando acionado,
e até que o action do form resolva toda a funcionalidade programada da função, o pending ficará como true e
depois que acabar ele fica como false (momento em que toda a action foi chamada e resolvida). */
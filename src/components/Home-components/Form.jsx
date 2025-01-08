function Form() {

    return (
      <>
        <form className="flex flex-col gap-4 w-full p-4 rounded-lg shadow-md bg-indigo-900">
          <h1 className="text-center text-2xl font-bold text-white">Cadastro de Usuários</h1>

          <input type="text" placeholder="Nome" 
          className="w-full rounded-lg p-2 text-sm outline-none bg-indigo-100 placeholder:italic"/>
          <input type="text" placeholder="Username" 
          className="w-full rounded-lg p-2 text-sm outline-none bg-indigo-100 placeholder:italic"/>
          <input type="text" placeholder="E-mail" 
          className="w-full rounded-lg p-2 text-sm outline-none bg-indigo-100 placeholder:italic"/>

          <button type="submit" 
          className="w-full p-2 rounded-lg font-semibold text-white bg-indigo-400 hover:text-indigo-900 hover:bg-emerald-400 transition-all">
            Cadastrar
          </button>
        </form>
      </>
    )
  }
  
  export default Form
  
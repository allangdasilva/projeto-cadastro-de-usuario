import { useState } from "react"

function Form(props) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(event){
      event.preventDefault()
      props.propAddUser(event, name, username, email)
      setName('')
      setUsername('')
      setEmail('')
    }

    return (
      <>
        <form className="flex flex-col gap-4 w-full p-4 rounded-lg shadow-md bg-indigo-900"
        onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-bold break-words text-white">Cadastro de Usuários</h1>

          <input type="text" placeholder="Nome" value={name} required
          className="w-full rounded-lg p-2 text-sm outline-none bg-indigo-100 placeholder:italic"
          onChange={(event)=> setName(event.target.value)}/>
          <input type="text" placeholder="Username" value={username} required 
          className="w-full rounded-lg p-2 text-sm outline-none bg-indigo-100 placeholder:italic"
          onChange={(event)=> setUsername(event.target.value)}/>
          <input type="text" placeholder="E-mail" value={email} required 
          className="w-full rounded-lg p-2 text-sm outline-none bg-indigo-100 placeholder:italic"
          onChange={(event)=> setEmail(event.target.value)}/>

          <button type="submit" 
          className="w-full p-2 rounded-lg font-semibold break-words text-white bg-indigo-400 hover:text-indigo-900 hover:bg-emerald-400 transition-all">
            Cadastrar
          </button>
        </form>
      </>
    )
}
  
  export default Form
  
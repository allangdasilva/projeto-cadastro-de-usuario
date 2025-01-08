import Form from "../components/Home-components/Form"
import Card from "../components/Home-components/Card"
import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  function addUser(event, name, username, email){
    event.preventDefault()
    const newUser = {name, username, email}
    
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then(response => {
      setUsers([...users, response.data])
    })
    .catch(error => {
      console.error('Erro ao cadastrar: ', error)
    })
  }

  function deleteUser(id){
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() =>{
      setUsers(users.filter(ele => ele.id !== id))
    })
    .catch(error => {
      console.error('Erro ao deletar: ', error)
    })
  }

  return (
    <>
      <main className="flex flex-col justify-center gap-6 min-h-screen w-full max-w-lg mx-auto p-6">
        <Form propAddUser={addUser} />
        <Card propUsers={users} propDeleteUser={deleteUser} />
      </main>
    </>
  )
}

export default Home

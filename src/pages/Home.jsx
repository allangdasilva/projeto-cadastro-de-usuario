import Form from "../components/Home-components/Form"
import Card from "../components/Home-components/Card"
import { useState } from "react"

function Home() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Allan',
      username: 'Griez',
      email: 'allan@email',
    },
    {
      id: 2,
      name: 'Messi',
      username: 'GOAT',
      email: 'messi@email',
    },
    {
      id: 3,
      name: 'Veiga',
      username: 'Principe',
      email: 'veiga@email',
    },
  ])
  return (
    <>
      <main className="flex flex-col justify-center gap-6 min-h-screen w-full max-w-lg mx-auto p-6">
        <Form />
        <Card propUsers={users} />
      </main>
    </>
  )
}

export default Home

import Form from "../components/Home-components/Form"
import Card from "../components/Home-components/Card"

function Home() {

  return (
    <>
      <main className="flex flex-col gap-6 w-full max-w-lg mx-auto p-6">
        <Form />
        <Card />
      </main>
    </>
  )
}

export default Home

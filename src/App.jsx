import { Form } from "./components/Formulario/Form"
import { Header } from "./components/Header/Header"
import { ListClient } from "./components/Listado de Pacientes/ListClient"

const App = () => {
  return (
    <div className="container mx-auto p-2">
      <Header />
      
      <main className="mt-14 md:flex flex-row justify-center items-center">
        <Form />
        <ListClient />
      </main>

    </div>
  )
}

export default App

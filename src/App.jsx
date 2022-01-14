import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListClient } from "./components/ListClient"

const App = () => {
  return (
    <div className="container mx-auto p-2">
      <Header />
      
      <div className="mt-14 md:flex flex-row justify-center items-center">
        <Form />
        <ListClient />
      </div>

    </div>
  )
}

export default App

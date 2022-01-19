import { Form } from "./components/Formulario/Form"
import { Header } from "./components/Header/Header"
import { ListClient } from "./components/Listado de Pacientes/ListClient";
import { useEffect, useState } from 'react';
import { deleteClient } from './helpers/index';

const App = () => {

  const [arrClients, setArrClients] = useState([]);
  const [client, setClient] = useState({});

  useEffect(() => {
    const clientsLocalStorage = JSON.parse(localStorage.getItem('citas')) || [];
    setArrClients(clientsLocalStorage);
  }, []);
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(arrClients));
  }, [arrClients]);

  return (
    <div className="container mx-auto p-2">
      <Header
        title='Control Pacientes'
        subTitile='Veterinaria'
      />
      
      <main className="mt-2 flex flex-col justify-center lg:flex-row lg:d-flex ">
        <Form
          arrClients={arrClients}
          setArrClients={setArrClients}
          client={client}
          setClient={setClient}
        />
        <ListClient
          arrClients={arrClients} 
          setClient={setClient}
          deleteClient={deleteClient}
          setArrClients={setArrClients}
        />
      </main>

    </div>
  )
}

export default App

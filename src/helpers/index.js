// Add new object in the array client
import Swal from 'sweetalert2';
export const handleSubmit = (
    arrDate,
    arrState,
    setError,
    setArrClients,
    arrClients,
    client,
    setClient) => {

    // Valida el formulario
    if (arrDate.includes('')) {
        setError(true);
        setTimeout(() => {
            setError(false)
        }, 2500);
        return
    };

    // deshabilita el error
    setError(false);

    // destructuracion de los array variables y funciones del useState
    const [mascota, propietario, email, date, sintomas] = arrDate;
    const [setMascota, setPropietario, setEmail, setDate, setSintomas] = arrState;

    // crea un objeto(agregamos el id para poder modificar boton y eliminar)
    const objectClient = {
        mascota,
        propietario,
        email,
        date,
        sintomas,
    }

    // Valida si el objeto esta actualizado, si lo esta
    // genera un nuevo arreglo y lo agrega al arrClients
    // en caso contrario, agrega un nuevo cliente. 

    if (client.id) {
        objectClient.id = client.id;
        const clientUpdate = arrClients.map(clientState =>
            clientState.id === client.id ?
                objectClient : clientState
        );
        setArrClients(clientUpdate);
        
        // Reicicia el state client a un objeto vacio
        setClient({})
    } else {
        objectClient.id = idUnique();
        // guarda los nuevo valores en el array de clientes
        setArrClients([...arrClients, objectClient]);
    };

    // setea los valores del formulario
    setMascota('');
    setPropietario('');
    setEmail('');
    setDate('');
    setSintomas('');
};

// calculate randon ID
export const idUnique = () => {
    const date = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)

    return (date + random)
}


// Remove client by ID
export const deleteClient = (id, arr, setArrClients) => {
    Swal.fire({
        title: '¿Estás seguro de eliminar este cliente?',
        text: "Debe estar dado de alta antes de eliminar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminaló!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El cliente fue eliminado.',
                'success'
            )
            const updateList = arr.filter(client => client.id !== id)
            setArrClients(updateList)
        };
    });
};
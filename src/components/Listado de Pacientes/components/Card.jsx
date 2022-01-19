import React from 'react';

export const Card = ({client, setClient, deleteClient, arrClients, setArrClients}) => {
    
    const { mascota, propietario, email, date, sintomas, id} = client
    return (
        <article className='flex flex-col mt-12 font-poppins py-4 px-5 mx-4 bg-white shadow-lg rounded-lg' >
            <p className='font-bold mb-3 text-gray-700 uppercase'> Mascota: {''}
                <span className='text-gray-600 font-semibold text-base'> {mascota} </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
                <span className='text-gray-600 font-semibold text-base'> {propietario} </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Contacto: {''}
                <span className='text-gray-600 font-semibold text-base'> {email} </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha de alta: {''}
                <span className='text-gray-600 font-semibold text-base'> {date} </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: {''}
                <span className='text-gray-600 font-semibold text-base'> {sintomas} </span>
            </p>

            <div className='flex flex-row justify-around p-2 items-center'>
                <button 
                    type='button'
                    className='w-40 p-2 border-0 outline-none cursor-pointer rounded-lg bg-indigo-600 text-white hover:bg-indigo-800'
                    onClick={() => {
                        deleteClient(id, arrClients, setArrClients)
                    }}
                >
                    Eliminar
                </button>
                <button 
                    type='button'
                    className='w-40 p-2 border-0 outline-none cursor-pointer rounded-lg bg-indigo-600 text-white hover:bg-indigo-800'
                    onClick={() => {
                        setClient(client)
                    }}
                >
                    Editar
                </button>
            </div>
        </article>
    )
}

import React, { useEffect, useState } from 'react';
import { handleSubmit } from '../../../helpers';
import { ErrorValidate } from './ErrorValidate';

export const Forumulario = (props) => {
    const { arrClients, setArrClients, client, setClient } = props;

    const [error, setError] = useState(false);
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sintomas, setSintomas] = useState('');


    const arrDate = [mascota, propietario, email, date, sintomas];
    const arrState = [setMascota, setPropietario, setEmail, setDate, setSintomas];

    useEffect(() => {
        if (Object.keys(client).length > 0) {
           setMascota(client.mascota)
           setPropietario(client.propietario)
           setEmail(client.email)
           setDate(client.date)
           setSintomas(client.sintomas)
        };
    }, [client]);

    return (
        <form
            className='bg-white shadow-md mx-3 px-5 py-10 rounded mt-10 w-full'
            onSubmit={(e) => {  
                e.preventDefault();
                handleSubmit(arrDate, arrState ,setError, setArrClients, arrClients, client, setClient);
            }}
        >
            <div className='mb-4'>
                <label
                    htmlFor='mascota'
                    className='block text-base text-gray-700 uppercase font-semibold'
                >
                    Nombre de la Mascota
                </label>

                <input
                    autoFocus="on"
                    id='mascota'
                    type='text'
                    name='mascota'
                    value={mascota}
                    onChange={(e) => setMascota(e.target.value) }
                    placeholder='Ingrese un nombre...'
                    className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                />
            </div>

            <div className='mb-4'>
                <label
                    htmlFor='propietario'
                    className='block text-base text-gray-700 uppercase font-semibold'
                >
                    Nombre del propietario
                </label>

                <input
                    id='propietario'
                    type='text'
                    name='propietario'
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value) }
                    placeholder='Ingrese un nombre del propietario...'
                    className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                />
            </div>

            <div className='mb-4'>
                <label
                    htmlFor='email'
                    className='block text-base text-gray-700 uppercase font-semibold'
                >
                    Email
                </label>

                <input
                    id='email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                    placeholder='Ingrese un e-mail...'
                    className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                />
            </div>

            <div className='mb-4'>
                <label
                    htmlFor='alta'
                    className='block text-base text-gray-700 uppercase font-semibold'
                >
                    Alta
                </label>

                <input
                    id='alta'
                    type='date'
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value) }
                    className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                />
            </div>

            <div className='mb-4'>
                <label
                    htmlFor='name'
                    className='block text-base text-gray-700 uppercase font-semibold'
                >
                    Ingrese sus sintomas
                </label>
                <textarea
                    id='sitomas'
                    name='sintomas'
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value) }
                    className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                    placeholder='Ingrese sus sintomas'
                />
            </div>

            <input
                type='submit'
                className='bg-indigo-600 text-white p-2 rounded w-full cursor-pointer hover:bg-indigo-900 transition-all'
                value={ (client.id) ? 'Guardar Datos' : 'Agregar Paciente'}
            />
            {error && <ErrorValidate info='Todos los campos son obligatorios' />}
        </form>
    )
};
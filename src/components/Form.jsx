
import React, { Fragment } from 'react'

export const Form = () => {
    return (
        <div className='flex flex-col justify-center items-center lg:w-2/5 md:w-1/2 font-poppins'>
            <h2 className='text-xl font-semibold'>Control de Pacientes</h2>
            <p className='text-lg my-3'>
                Ingresa un Paciente y {''}
                <span className='text-indigo-600 text-center font-bold'>Lleva el control de ello</span>
            </p>
            <form className='bg-white shadow-md px-5 py-10 rounded mt-8 w-full'>
                
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
                        name='name'
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
                        name='name'
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
                        name='name'
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
                        name='name'
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
                        className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                        placeholder='Ingrese sus sintomas'
                    />
                </div>

                <input
                    type='submit'
                    className='bg-indigo-600 text-white p-2 rounded w-full cursor-pointer hover:bg-indigo-900 transition-all'
                />
            </form>
        </div>
    );
};
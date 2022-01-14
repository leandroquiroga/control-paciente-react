import React from 'react'

export const Forumulario = (props) => {

    const { handdleChangeInput, formValue } = props;
    
    const { nameMascota, namePropietario, email, dateAlta, sintomas } = formValue;

    const handdleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
    };

    return (
        <form
            className='bg-white shadow-md px-5 py-10 rounded mt-8 w-full'
            onSubmit={handdleSubmit}
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
                    name='nameMascota'
                    value={nameMascota}
                    onChange={handdleChangeInput}
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
                    name='namePropietario'
                    value={namePropietario}
                    onChange={handdleChangeInput}
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
                    onChange={handdleChangeInput}
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
                    name='dateAlta'
                    value={dateAlta}
                    onChange={handdleChangeInput}
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
                    onChange={handdleChangeInput}
                    className='border-2 text-base w-full p-2 mt-2 placeholder-slate-600 rounded'
                    placeholder='Ingrese sus sintomas'
                />
            </div>

            <input
                type='submit'
                className='bg-indigo-600 text-white p-2 rounded w-full cursor-pointer hover:bg-indigo-900 transition-all'
            />
        </form>
    )
}

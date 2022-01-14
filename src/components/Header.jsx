
import React, { Fragment } from 'react';

export const Header = () => {
    return (
        <Fragment>
            <h1 className='font-poppins font-semibold text-3xl text-center md:w-2/3 mx-auto' >
                Control Pacientes {''}
                <span className='text-indigo-600 font-black'>Veterinaria</span>
            </h1>
        </Fragment>
    )
}

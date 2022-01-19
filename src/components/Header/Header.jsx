
import React from 'react';

export const Header = ({title, subTitile}) => {
    return (
        <header className='p-3 font-poppins'>
            <h1 className='font-semibold text-3xl text-center md:w-2/3 mx-auto' >
                { title } {''}
                <span className='text-indigo-600 font-black'>{ subTitile }</span>
            </h1>
        </header>
    )
}

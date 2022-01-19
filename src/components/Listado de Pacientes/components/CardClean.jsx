import React from 'react'
import  logo  from '../../../assets/relax_icon.svg';

export const CardClean = ({message}) => {
    return (
        <article className='flex flex-col mt-12 justify-center items-center p-5'>
            <img src={logo} alt='No task' className='w-full' />
            <p className='font-poppins text-2xl font-bold my-5'>{ message }</p>
        </article>
    )
}

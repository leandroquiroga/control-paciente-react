import React from 'react'

export const ErrorValidate = ({info}) => {
    return (
        <div className='bg-red-600 mt-3 rounded uppercase font-poppins text-center text-white font-bold w-full p-2'>
            {info}
        </div>
    )
}

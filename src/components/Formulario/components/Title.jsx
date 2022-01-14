import React from 'react'

export const Title = (props) => {
 
    const { titleText, subtitleText, spanText} = props;
    return (
        <article>
            <h2 className='text-xl font-semibold text-center'>{ titleText }</h2>
            <p className='text-lg my-3 text-center'>
                { subtitleText } y {''}
                <span className='text-indigo-600 text-center font-bold'>{ spanText }</span>
            </p>
        </article>
    )
}


import React from 'react'
import { Title } from './../Formulario/components/Title';
import { Card } from './components/Card';

export const ListClient = () => {
    return (
        <section className='flex flex-col justify-center items-center lg:3/5 md:w-1/2'>
            <Title 
                titleText='Listado de Pacientes'
                subtitleText='Administra tus Pacientes'
                spanText='Citas'
            />

            <Card />
        </section>
    )
}

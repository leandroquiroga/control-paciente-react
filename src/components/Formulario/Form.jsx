
import React from 'react'
import { useForm } from './../../hooks/useForm';
import { Forumulario } from './components/Forumulario';
import { Title } from './components/Title';

export const Form = () => {

    const [formValue, handdleChangeInput] = useForm({
        nameMascota: '',
        namePropietario: '',
        email: '',
        dateAlta: '',
        sintomas: '',
    });

    // const { nameMascota, namePropietario, email, dateAlta, sintomas } = formValue;
     
    return (
        <section className='flex flex-col justify-center items-center lg:w-2/5 md:w-1/2 font-poppins'>

            <Title 
                titleText='Control de Pacientes'
                subtitleText='Ingresa un Paciente'
                spanText='Lleva el control de ello'
            />

            <Forumulario
                handdleChangeInput={handdleChangeInput}
                formValue={formValue}
            />
        </section>
    );
};
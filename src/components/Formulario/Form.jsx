import React from 'react';
import { Forumulario } from './components/Forumulario';
import { Title } from './components/Title'; 

export const Form = ({arrClients, setArrClients,client ,setClient}) => {
    return (
        <section className='flex flex-col justify-center items-center lg:w-3/5 md:w-full font-poppins'>

            <Title 
                titleText='Control de Pacientes'
                subtitleText='Ingresa un Paciente'
                spanText='Lleva el control de ello'
            />

            <Forumulario
                arrClients={arrClients}
                setArrClients={setArrClients}
                client={client}
                setClient={setClient}
            />
        </section>
    );
};
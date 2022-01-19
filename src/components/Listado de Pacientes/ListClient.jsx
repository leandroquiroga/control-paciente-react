import React from 'react'
import { idUnique } from '../../helpers';
import { Title } from './../Formulario/components/Title';
import { Card } from './components/Card';
import { CardClean } from './components/CardClean';

export const ListClient = ({ arrClients, setClient, deleteClient, setArrClients }) => {

    return (
        <section className='d-flex flex-col justify-center lg:w-3/5 md:w-full '>
            <Title 
                titleText='Listado de Pacientes'
                subtitleText='Administra tus Pacientes'
                spanText='Citas'
            />
            {
                (arrClients.length === 0) ?
                        (
                            <CardClean message='No se han encontrado clientes'/>
                        )
                    :
                        (
                            arrClients.map(client => (
                                <Card
                                    key={idUnique()}
                                    client={client}
                                    setClient={setClient}
                                    deleteClient={deleteClient}
                                    arrClients={arrClients}
                                    setArrClients={setArrClients}
                                />
                            ))
                        )
            }
        </section>
    )
}

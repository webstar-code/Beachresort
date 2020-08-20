import React, { useState } from 'react';
import Titles from './Titles';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ill',
        },
        {
            icon: <FaHiking />,
            title: "free Hiking",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, illo',
        },
        {
            icon: <FaShuttleVan />,
            title: "fastest delivery",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, illo',
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, illo',
        }
    ]

    const [state, setstate] = useState(services);

    return (
        <>
            <div className="services">
                <Titles title="services" />
                <div className="services-center">
                    {state.map((item, index) => {
                        return (
                            <article className="service" key={index}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </>

    )
}


export default Services;
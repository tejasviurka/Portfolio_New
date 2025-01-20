import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Java Full Stack Development",
        description:
            "Building scalable applications with Java Spring Boot for the backend and React.js for the frontend,Using MongoDB or MySQL for efficient and seamless data management.",
    },
    {
        id: 2,
        image: Image2,
        title: "UI/UX Design",
        description:
        "Creating visually engaging mockups and prototypes using Figma and Canva,Enhancing project visualization with creative and user-focused designs."
    },
    {
        id: 3,
        image: Image3,
        title: "Cloud Computing & AWS",
        description:
            "Exploring, learning, and building products using AWS services and cloud technologies to create secure, scalable, and efficient solutions.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
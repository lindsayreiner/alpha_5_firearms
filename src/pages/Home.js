import React from 'react';

import '../styles/Home.css';
import hero from '../images/concealed_carry_cross(1).jpg';
import level from '../images/level1_instructor.svg';
import rso from '../images/rso-badge.svg';
import conceal from '../images/concealed_carry_badge.svg';
import Reviews from '../components/Reviews';

export default function Home() {
    return (
        <>
            <section class="hero-content">
                {/* <h1 className="hero-title">

                </h1>
                <h2 className="hero-subtitle">

                </h2> */}

                <img className="hero-img" src={hero} alt="holstered pistol on a wooden frame" />
            </section>
            <section>
                {/* <Reviews /> */}
            </section>

        </>
    )
}

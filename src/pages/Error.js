import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link  } from 'react-router-dom';
export default function() {
    return (
        <>
            <Hero>
                <Banner title="404" subtitle="Not Found">
                    <Link to="/" className="btn-primary">return Home</Link>
                </Banner>
                
                </Hero>
        </>

    )
}
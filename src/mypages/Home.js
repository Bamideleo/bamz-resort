import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeatureRoom from '../components/FeatureRoom'
import Hero from '../components/Hero'
import Services from '../components/Services'

function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="delux rooms starting from &#8358;65,000">
               <Link to="/Rooms" className="btn-primary">
                   our rooms
               </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeatureRoom/>
      </>
    )
}

export default Home

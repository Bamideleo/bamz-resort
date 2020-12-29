import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

function ErrorPage() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn-primary">
                back to home
            </Link>
            </Banner>
        </Hero>
    )
}

export default ErrorPage

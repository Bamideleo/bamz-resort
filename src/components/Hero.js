import React from 'react'

function Hero({children,props}) {
    return (
        <header className={props}>{children}</header>
    )
}
Hero.defaultProps={
props:"defaultHero"
}
export default Hero

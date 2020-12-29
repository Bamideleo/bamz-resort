import React from 'react'
import DefaultImg from '../images/room-6.jpeg'
import { Link } from 'react-router-dom'
// propstypes is to check the data types
import PropsTypes from 'prop-types'
function Room({room}) {

    const{name,slug,price,images} = room
    return (
       <article className="room">
           <div className="img-container">
               <img src={images[0]||DefaultImg} alt="single room"/>
               <div className="price-top">
                    <h6>&#8358;{price}</h6>
                    <p>per night</p>
               </div>
               <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                        Features
                    </Link>
           </div>
           <p className="room-info">{name}</p>
       </article>
    )
}

Room.PropsTypes={
room:PropsTypes.shape({
name:PropsTypes.string.IsRequired,
slug:PropsTypes.string.IsRequired,
images:PropsTypes.arrayOf(PropsTypes.string).IsRequired,
price:PropsTypes.number.IsRequired
})
}
export default Room

import React, { Component } from 'react'
import Banner from '../components/Banner'
import {RoomContext} from  '../Contain'
import {Link} from 'react-router-dom'
import StyleHero from '../components/StyledHero'


class SingleRoom extends Component {
 
constructor(props) {
    super(props)
    // this get props react-router-dom
// console.log(props)
this.state={
    slug: this.props.match.params.slug
}
}

static contextType = RoomContext
    render() {
        const {getRoom} = this.context
        const room =  getRoom(this.state.slug)
        // console.log(room)
        if(!room){
        return(
            <div className="error">
                <h3>no such room found....</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        )
        }
        const {name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images}=room;
            const [ ...DefaultImg]=images;
            // console.log(DefaultImg);
        return (
            <>
               <StyleHero img={images[0] || this.state.DefaultImgs}>
                <Banner title={`${name} room`}>
              <Link to="/rooms"className="btn-primary">
              back to rooms
                  </Link> 
           </Banner>
            </StyleHero>
            <section className="single-room">
                <div className="single-room-images">
                    {DefaultImg.map((item,index)=>{
                     return <img src={item} key={index} alt={name}/>
                    }
                    )}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: &#8358;{price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>max capacity: {""}
                        {capacity > 1? `${capacity} people`:`${capacity} person`}
                        </h6>
                        <h6>{pets ? 'pets are allowed':'no pets is allowed'}</h6>
                        <h6>{breakfast && 'free breakfast'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index)=>{
                    return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
         
        )
    }
}

export default SingleRoom

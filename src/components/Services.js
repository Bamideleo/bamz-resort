import React,{useState} from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa'

function Services() {
    const[services] = useState([{
        icon:<FaCocktail/>,
        title:"Free cocktail",
        info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eveniet!"
    },
    {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eveniet!"
    },
    {
        icon:<FaShuttleVan/>,
        title:"Free ShuttleVan",
        info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eveniet!"
    },
    {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eveniet!"
    }])
    return (
     <section className="services">
    <Title title="services"/> 
    <div className="services-center">
        {services.map((item,index)=>{
           return <article key={index} className="service">
               <span>{item.icon}</span>
               <h6>{item.title}</h6>
               <p>{item.info}</p>
           </article>
        })}
    </div>
     </section>
          
          
        
    )
}

export default Services

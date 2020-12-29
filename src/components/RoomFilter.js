import React,{useContext} from 'react';
import Title from './Title'
import {RoomContext} from '../Contain'

// get all unique values
const getValue = (items,value)=>{
return [...new Set(items.map(item=>(item[value])))]
}
function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const { type,
    capacity,
    pets,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    handleChange} = context;
    // get unique type
    let types = getValue(rooms,'type');
    // add all
   types = ['all',...types]
//    map the jsx
types = types.map((item, index)=>{
return(
    <option key={index} value={item}>{item}</option>
)
})
let people = getValue(rooms,'capacity')
people = people.map((item, index)=>{
return(
    <option key={index} value={item}>{item}</option>
)
})
    return (
       <section className="filter-container">
           <Title title="search rooms"/>
           <form className="filter-form">
               {/* select type */}
               <div className="form-group">
                   <label htmlFor="type">room type</label>
                   <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                       {types}
                   </select>
               </div>
               {/* select type end */}
                {/* select guests */}
                <div className="form-group">
                   <label htmlFor="capacity">Guests</label>
                   <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                       {people}
                   </select>
               </div>
               {/* select guests end */}
               {/* room price */}
               <div className="form-group">
                   <label htmlFor="price">room price: &#8358;{price}</label>
                   <input type="range" name="price" id="price" max={maxPrice} min={minPrice} 
                   value={price} onChange={handleChange} className="form-control"/>
               </div>
               {/* end room price */}
               {/* room size */}
               <div className="form-group">
                   <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize}
                        onChange={handleChange} className="size-input"/>
                          <input type="number" name="maxSize" id="size" value={maxSize}
                        onChange={handleChange} className="size-input"/>
                    </div>
               </div>
               {/* end room size */}
               {/* extras */}
               <div className="form-group">
                   <div className="single-extra">
                   <label htmlFor="breakfast">breakfast</label>
                       <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} 
                       onChange={handleChange} />
                       <div className="single-extra">
                   <label htmlFor="pets">pets</label>
                       <input type="checkbox" name="pets" id="pets" checked={pets} 
                       onChange={handleChange} />
                   </div>
                   </div>
               </div>
               {/* end extras */}
           </form>
       </section>
    )
}

export default RoomFilter

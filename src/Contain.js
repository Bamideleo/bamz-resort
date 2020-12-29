import React, { Component } from 'react'
// import items from './data';
//  serverless connection  
import {createClient} from 'contentful'
const Client = createClient({  
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN

});

const RoomContext = React.createContext();
class Contain extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type:'all',
        capacity:0,
        pets:false,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false
    }
// getData from the serverless
getData = async()=>{
    try {
        let response = await Client.getEntries({
            content_type:'bamzresort',
            order: 'sys.createdAt'
            // order: 'fields.price '
        });
            let rooms = this.DataFormat(response.items);
            let featuredRooms = rooms.filter(room=>room.featured ===true)
            let maxPrice = Math.max(...rooms.map(item =>
                item.price))
            let maxSize = Math.max(...rooms.map(item=>
                item.size))
         
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize,
            })
    } catch (error) {
        console.log(error);
    }
}
componentDidMount(){
    // at first using local data
    this.getData()
    // let response = await Client.getEntries({
    //     content_type:'bamzresort'});
    //     let rooms = this.DataFormat(items);
    //     let featuredRooms = rooms.filter(room=>room.featured ===true)
    //     let maxPrice = Math.max(...rooms.map(item =>
    //         item.price))
    //     let maxSize = Math.max(...rooms.map(item=>
    //         item.size))
     
    //     this.setState({
    //         rooms,
    //         featuredRooms,
    //         sortedRooms:rooms,
    //         loading:false,
    //         price:maxPrice,
    //         maxPrice,
    //         maxSize,
    //     })
}
DataFormat(items){
    let ItemsList= items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image =>image.fields.file.url)
        let room = {...item.fields,images,id}
        return room;
    });
    return ItemsList;
}

getRoom = slug =>{
    let RoomList = [...this.state.rooms]
    const room = RoomList.find(room => room.slug===slug);
    return room;
}
handleChange = event =>{
    const target = event.target;
    const name = event.target.name;
    const value =  target.type === 'checkbox'?target.checked:target.value;
   this.setState(
       {
           [name]:value

       },
       this.filterRooms
   )
}
filterRooms = ()=>{
let {type,
    capacity,
    pets,
    price,
    minSize,
    maxSize,
    breakfast, rooms} = this.state
    // all rooms
    let tempRooms = [...rooms]
    // tranfrom value
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if(type !== 'all'){
        tempRooms = tempRooms.filter(room =>room.type ===type)
    }
    // filter by capacity
    if(capacity !==1){
        tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
    }
    // filter by price
    tempRooms = tempRooms.filter(room=>room.price <= price)
    // filter by size
    tempRooms = tempRooms.filter(room=>room.size >= minSize && room.size <= maxSize)
    // filter by breakfast 
    if(breakfast){
        tempRooms = tempRooms.filter(room=>room.breakfast === true)
    }
    // filter by pets
    if(pets){
        tempRooms = tempRooms.filter(room=>room.pets === true)
    }
    // change state 
    this.setState({
        sortedRooms:tempRooms
    })
}
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom,
            handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
           
        )
    }
}

const RoomConsumer = RoomContext.Consumer
export {Contain,RoomConsumer,RoomContext} 


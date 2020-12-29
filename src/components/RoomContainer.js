import React from 'react'
import { RoomConsumer } from '../Contain'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading';

function RoomContainer() {
 return   <RoomConsumer>
        {
            (value)=>{
                const {loading,rooms,sortedRooms}=value
                // console.log(value);
                if(loading){
                    return <Loading/>
                }
                return (
                   <>
                        <RoomFilter rooms={rooms}/> 
                       <RoomList rooms={sortedRooms}/>
                   </>
                )
            }
        }
    </RoomConsumer>
}

export default RoomContainer

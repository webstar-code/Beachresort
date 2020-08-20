import React, { useContext } from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { RoomContext} from '../context';

const RoomContainer = () => {
  const {rooms ,sortedRooms, loading} = useContext(RoomContext);
  return(
    <>
    <RoomFilter rooms={rooms}/>
    <RoomList rooms={sortedRooms}/>
    </>


  )
}

export default RoomContainer;
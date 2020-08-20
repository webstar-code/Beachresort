import React from 'react';
import Room from '../Components/Room';

const RoomList = (props) => {
  const { rooms } = props;

  return(
    <>
    {rooms.length === 0 ? 
      <div className="empty-search">
        <h3>
        unfortunetly no rooms were found...</h3>
      </div>
    :
    <>
     <div className="roomslist">
       <div className="roomslist-center">
         {
         rooms.map((item, index) => {
           return <Room key={index} room={item} />
         })
        }
       </div>
     </div>
    </>
    }
    </>


  )
} 

export default RoomList;


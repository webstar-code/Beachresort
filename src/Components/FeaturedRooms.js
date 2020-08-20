import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Title from './Titles';
import Room from './Room';
const FeaturedRooms = () => {
    let { featuredRooms: rooms, loading } = useContext(RoomContext);
    rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
    })

    return (
        <div>
            <Title title="featured rooms" />
            {loading ? <Loading /> :
                <div className="featured-rooms">
                    <div className="featured-rooms-center">
                        {rooms}
                </div>
                </div>
            }

        </div>
    )
}


export default FeaturedRooms;
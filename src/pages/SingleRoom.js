import React, { useContext, useEffect } from 'react';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../Components/StyledHero';
import defaultImg from '../images/room-1.jpeg';

const SingleRoom = ({ match }) => {
    const { slug } = match.params;
    const { getRoom } = useContext(RoomContext);
    let room = getRoom(slug);


    return (
        <>
            {room ?
                <div>
                    <StyledHero img={room.images[0] || defaultImg}>
                        <Banner title={`${room.name} room`}>
                            <Link to="/rooms" className="btn-primary">back to rooms</Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-room">
                        <div className="single-room-images">
                            {room.images.map((image, index) => {
                                return <img key={index} src={image} alt={room.name}></img>
                            })
                            }
                        </div>
                        <div className="single-room-info">
                            <article className="desc">
                                <h3>Details</h3>
                                <p>{room.description}</p>
                            </article>
                            <article className="info">
                                <h3>Info</h3>
                        <h6>price: ${room.price}</h6>
                        <h6>size: ${room.size}</h6>
                        <h6>
                            max-capacity: {" "}
                            {room.capacity > 1 ? `${room.capacity} person` : `${room.capacity} people`}
                        </h6>
                        <h6>{room.pets ? "Pets Allowed" : "no pets allowed"}</h6>
                        <h6>{room.breakfast && "free breakfast available"}</h6>

                            </article>
                        </div>
                    </section>

                    <section className="room-extras">
                        <h3>extras</h3>
                        <ul className="extras">
                            {room.extras.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </section>




                </div>
                :
                <div className="error">
                    <h3>No such room can be found...</h3>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </div>
            }
        </>

    )
}

export default SingleRoom;
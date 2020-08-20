import React from 'react';
import defaultImg from '../images/room-1.jpeg';
import { Link } from 'react-router-dom';

const Room = (props) => {
  const { price, slug, images, name } = props.room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="Single room" />
        <div className="price-top">
          <h6>{price}</h6>
          <p>per night</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
        <p className="room-info">{name}</p>
      </div>
    </article>

  )
}

export default Room;
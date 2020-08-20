import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Titles';

const GetUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = (props) => {
  const { rooms } = props;
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, maxPrice, minPrice, maxSize, minSize, breakfast, pets } = context;

  let types = GetUnique(rooms, "type");
  types = ["all", ...types];

  let people = GetUnique(rooms, "capacity");


  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">rooms type</label>
          <select name="type" id="type" className="form-control" onChange={handleChange} value={type}>
            {types.map((type, index) => {
              return <option key={index} value={type}>{type}</option>
            })}
          </select>
        </div>

        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" className="form-control" onChange={handleChange} value={capacity}>
            {people.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
        </div>
        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice}
            value={price} className="form-control" id="price" onChange={handleChange} />
        </div>
        {/* Room Size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        {/* Single extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} id="breakfast" />
            <label htmlFor="breakfast">breakfast</label>  
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" checked={pets} onChange={handleChange} id="pets" />
            <label htmlFor="pets">pets</label>
          </div>
        </div>


      </form>
    </section>


  )
}

export default RoomFilter;
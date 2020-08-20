import React, { Component } from 'react';
// import items from './data';
import Client from './contentful';

const RoomContext = React.createContext();



class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    // getData from contentful
    getData = async () => {
        try {
            let res = await
                Client.getEntries({
                    order: 'sys.createdAt'
                })
            let rooms = this.formatData(res.items);
            let featuredRooms = rooms.filter(room => room.features === true);
            let maxPrice = Math.max(...rooms.map(room => room.price));
            let maxSize = Math.max(...rooms.map(room => room.size));

            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })

        } catch (error) {
            console.log("Something went wrong");
        }
    }




    componentDidMount() {
        this.getData();
    }

    formatData(items) {
        let tempitems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url
            )
            let room = { ...item.fields, id, images }
            return room;
        })
        return tempitems;
    }

    // GetRoom
    getRoom = slug => {
        let temprooms = [...this.state.rooms];
        let room = temprooms.find((room) => room.slug === slug);
        return room;
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = e.target.name;
        this.setState({
            [name]: value

        }, this.filterrooms);


    }

    filterrooms = () => {
        let { rooms, type, capacity, price, maxSize, minSize, breakfast, pets } = this.state;

        let tempRooms = [...rooms];
        // transform
        capacity = parseInt(capacity);
        price = parseInt(price);

        // fitler by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        // fitler by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        // fitler by price 
        tempRooms = tempRooms.filter(room => room.price <= price);

        // fitler by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms
        })

    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>


        )
    }
}


const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
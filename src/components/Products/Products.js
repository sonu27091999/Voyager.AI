import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Loader from '../UI/Loader';

const Products = ({ onAddItem, onRemoveItem, eventState }) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        async function fecthItem() {
            try {
                const response = await axios.get('https://hello-world-52dbb-default-rtdb.firebaseio.com/items.json');
                let data = response.data;
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0,
                        id: index
                    }
                })
                setLoader(false);
                setItems(transformedData);
            }
            catch (error) {
                setLoader(false);
                console.log("errors : ", error);
                alert('Some error occured');
            }
            finally {
                setLoader(false);
            }
        }
        fecthItem();
    }, []);

    useEffect(() => {
        if (eventState.id > -1) {
            if (eventState.type === 1) {
                handleAddItem(eventState.id);
            }
            else if(eventState.type===-1) {
                handleRemoveItem(eventState.id);
            }
        }
    }, [eventState])


    const handleAddItem = (id) => {
        let data = [...items];
        let index = data.findIndex(i => i.id === id);
        data[index].quantity += 1;
        setItems([...data]);
        onAddItem(data[index]);
    }
    const handleRemoveItem = (id) => {
        let data = [...items];
        let index = data.findIndex(i => i.id === id);
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1;
            setItems([...data]);
            onRemoveItem(data[index]);
        }
    }

    return (
        <>
            <div className='product-list'>
                <div className='product-list--wrapper'>
                    {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                    {/* {[<div>hello div</div>,<p>hello p</p>]} */}
                    {
                        items.map((item) => {
                            return <ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />
                        })
                    }
                </div>
            </div>
            {loader && <Loader />}
        </>
    )
}

export default Products
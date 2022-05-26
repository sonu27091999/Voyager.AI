import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState,useEffect } from 'react';
import axios from 'axios'

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        //@@@@@@@@ using axioms
        async function fecthItems() {
            try {
                const response = await axios.get('https://hello-world-52dbb-default-rtdb.firebaseio.com/items.json');
                const data = response.data;
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                setItems(transformedData);
            } catch (error) {
                console.log("errors : ", error);
                alert('some error occured');
            }
        }
        fecthItems();
    }, [])

    return (
        <div className='product-list'>
            <div className='product-list--wrapper'>
                {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                {/* {[<div>hello div</div>,<p>hello p</p>]} */}
                {
                    items.map((item) => {
                        return <ListItem key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Products
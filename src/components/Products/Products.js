import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState } from 'react';
import axios from 'axios'

const Products = () => {
    const [items, setItems] = useState([]);

    //@@@@@@@@ using axioms
    axios.get('https://hello-world-52dbb-default-rtdb.firebaseio.com/items.json')
        .then(resopnse => {
            const data = resopnse.data;
            const transformedData = data.map((item, index) => {
                return {
                    ...item,
                    id: index
                }
            })
            console.log(transformedData);
            setItems(transformedData);
        })
        .catch(error => console.log(error));

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
import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState, useEffect } from 'react';
import axios from 'axios'

const Products = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            discountedPrice: 340,
            price: 450,
            title: "Title of the Item 1",
            thumbnail: 'placeholder.png'
        },
        {
            id: 1,
            discountedPrice: 350,
            price: 460,
            title: "Title of the Item 2",
            thumbnail: 'placeholder.png'
        },
        {
            id: 2,
            discountedPrice: 350,
            price: 460,
            title: "Title of the Item 3",
            thumbnail: 'placeholder.png'
        }
    ]);

    useEffect(() => {
        //@@@@@@ using Fetch API

        // const results = fetch('https://hello-world-52dbb-default-rtdb.firebaseio.com/items.json')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error));

        //@@@@@@@@ using axioms
        axios.get('https://hello-world-52dbb-default-rtdb.firebaseio.com/items.json')
            .then(resopnse => console.log(resopnse))
            .catch(error => console.log(error));

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
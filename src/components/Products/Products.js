import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState } from 'react';

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
        } ,
        {
            id: 2,
            discountedPrice: 350,
            price: 460,
            title: "Title of the Item 3",
            thumbnail: 'placeholder.png'
        }   
    ]);
    return (
        <div className='product-list'>
            <div className='product-list--wrapper'>
                {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                {/* {[<div>hello div</div>,<p>hello p</p>]} */} 
                {
                    items.map((item)=>{
                        return <ListItem key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Products
import React from 'react'
import ListItem from "./ListItems/ListItem";

const items = [
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
    }
]

const Products = () => {
    return (
        <div className='product-list'>
            <div className='product-list--wrapper'>
                <ListItem data={items[0]} />
                <ListItem data={items[1]} />
            </div>
        </div>
    )
}

export default Products
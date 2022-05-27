import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Loader from '../UI/Loader';

const Products = () => {
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
    }, [])

    return (
        <>
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
            {loader && <Loader />}
        </>
    )
}

export default Products
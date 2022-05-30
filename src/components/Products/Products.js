import React from 'react'
import ListItem from "./ListItems/ListItem";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Loader from '../UI/Loader';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Products = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search).get('search');

    useEffect(() => {
        async function fecthItem() {
            try {
                let slug = 'items.json';
                if (params.category) {
                    slug = `items-${params.category}.json`
                }
                if(queryParams){
                    slug+=`?search=${queryParams}`;
                }
                const response = await axios.get(`https://hello-world-52dbb-default-rtdb.firebaseio.com/${slug}`);
                let data = response.data;
                if (!data) {
                    handleNotFount();
                    return;
                }
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
        return () => {
            setItems([]);
            setLoader(true);
        }
    }, [params.category,queryParams]);

    const handleNotFount = () => {
        navigate('/404');
    }

    return (
        <>
            <div className='product-list'>
                <div className='product-list--wrapper'>
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
//coleccion de elementos que coinciden con categories

import React, { useState, useEffect } from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    const { data, loading } = useFetchGif(category);


    // getGifs();
    return (
        <>
            <div className="container">
                <h3 className="animate__animated animate__fadeIn">{category}</h3>
                {loading && <p className=" animate__animated animate__flash">Cargando</p>}
                <div className="card-grid row">

                    {
                        data.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    }
                </div>
            </div>
        </>
    )




}

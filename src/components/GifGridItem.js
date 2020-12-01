import React, {useState} from 'react'

export const GifGridItem = (img) => {
    //  console.log(img);
    return (
        <div className="card animate__animated animate__fadeIn col-md-3">
            <img src={img.url} alt={img.title}></img>
            <p>{img.title}</p>
        </div>
    );
}

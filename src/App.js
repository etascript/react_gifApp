import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

// agregar nueva categoría

const App = () => {
    let [categories, setCategories] = useState(['One punch']);
    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'Haikyuu!!']);
    // }


    return (
        <div className="container">
            <AddCategory setCategories={setCategories} />
            <hr></hr>


            <ol>
                {
                    categories.map(category =>
                        (<GifGrid
                                key={category} 
                                category={category}
                            />)
                    )
                }
            </ol>
        </div>
    );
}

export default App;
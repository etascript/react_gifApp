import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputAdd = (e) => {
        setInputValue(e.target.value);
    }
    const handleInputSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2 ){
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');
        }
        
    }
    return (
        <form className="form formulario" onSubmit={handleInputSubmit}>
            <h2>Agregar Categoría</h2>
            <input className="form-control" type="text" 
            id="nombre" 
            placeholder="Ingrese una opción nueva"
            value={inputValue}
            onChange={handleInputAdd}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

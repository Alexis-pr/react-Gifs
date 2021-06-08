import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange=(e)=>{
        setInputValue(e.target.value)
        console.log('HandleChange fue llamado desde addCategory')
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('esto es un llamado desde el handleSubmit de addCategory')
        if( inputValue.trim().length >= 3){
          setCategories(categor => [inputValue , ...categor ] )
          setInputValue('')
        } else{
            alert('Tiene q ser mayor a 3 letras')
        } 
            
    }

    return (
        <>
         {/*    <h2>Buscar...</h2>   */}
            <form onSubmit={handleSubmit}>
                <p>{inputValue}</p>
                <input 
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Buscar...."
                />
            </form>
             
        </>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory

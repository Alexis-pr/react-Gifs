import React, { useState } from 'react'
import PropTypes from 'prop-types';



const AddCategory = ( {setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if( inputValue.trim().length >= 3){
          setCategories(categor => [inputValue , ...categor ] )
          setInputValue('')
        }else{
            alert('Tiene q ser mayor a 3 letras')
        }
            
    }

    return (
        <>
         {/*    <h2>Buscar...</h2>   */}
            <form onSubmit={handleSubmit}>
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

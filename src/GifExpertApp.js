
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState(['One Punch'])

  /*  const handleAdd = () =>{
        //setCategories([...categories, 'HxH']) puede ser asi  O
        setCategories(category => [...category,'Hxh'])
        // se utiliza el operador spread para realizar una copia del array en ambos ejemplos y de esta forma agregar el nuevo valor,
        //  si se realiza con un push este No lo agregaria en el estado.
    } */
    
    return (
        <>
        <div className="header ">
            <div className=" container directionHeader" >
                <h2 > Gif Expert App</h2>
                <AddCategory  setCategories={ setCategories }/>  
            </div>
        </div>
       
         <div className="container">

            <ol>
            {
                categories.map((category) => (
                <GifGrid
                    key={category} 
                    category={category}
                   
                /> ))
            } 
            </ol>
         </div>
        </>
    )
}


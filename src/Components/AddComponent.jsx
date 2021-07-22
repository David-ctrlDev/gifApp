import React from 'react'
import { useState } from 'react';

function AddComponent({setCategories}) {
const [newCategory, setnewCategory] = useState("");
 
    const handleChange =(e)=>{     
        setnewCategory(e.target.value)
    }
    const handleClick =(e)=>{
        setCategories(cats=>[...cats,newCategory])
    }
    return (
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Agregar</button>
          
            

            
        </div>
    )
}

export default AddComponent

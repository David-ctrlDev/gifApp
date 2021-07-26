import React from 'react'
import { useState } from 'react';
import AddComponent from './AddComponent';


function GifExpertApp() {

    var [categories, setCategories] = useState(['Animé 1','Animé 2','Animé 3']);
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>
            <ol>
                {
                    categories.map(category =>{
                        return <li key={category}> {category}</li>
                    })
                }    
            </ol>
            <AddComponent setCategories={setCategories}/>
         
        </div>
    )
}

export default GifExpertApp

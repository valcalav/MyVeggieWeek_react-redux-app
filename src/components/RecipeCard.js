import React from 'react'

import './RecipeCard.css'

function RecipeCard({ recipe, add }) {
    return (
        <div className='recipe-card' key={recipe.id}>
            <img src={recipe.imgURL} className='recipeListPhoto' alt='recipe'/>
            <div className='recipe-card-title'>
                <h5>{recipe.name}</h5>
            </div>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default RecipeCard

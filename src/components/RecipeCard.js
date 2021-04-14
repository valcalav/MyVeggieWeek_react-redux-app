import React from 'react'

import './Recipes.css'

function RecipeCard({ recipe, details }) {
    return (
        <div className='recipe-card' key={recipe.id}>
            <img src={recipe.imgURL} className='recipe-list-photo' alt='recipe'/>
            <div className='recipe-card-title'>
                <h5>{recipe.name}</h5>
            </div>
            <button onClick={details}>Details</button>
        </div>
    )
}

export default RecipeCard

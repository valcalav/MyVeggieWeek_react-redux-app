import React from 'react'

import './RecipeCard.css'

function RecipeCard({ recipe }) {
    return (
        <div className='recipe-card' key={recipe.id}>
            <img src={recipe.imgURL} className='recipeListPhoto' />
            <div className='recipe-card-title'>
                <h4>{recipe.name}</h4>
            </div>
        </div>
    )
}

export default RecipeCard

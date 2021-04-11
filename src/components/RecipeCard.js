import React from 'react'

import './RecipeCard.css'

function RecipeCard({ recipe }) {
    return (
        <div key={recipe.id}>
            <h4>{recipe.name}</h4>
            <img src={recipe.imgURL} className='recipeListPhoto' />
        </div>
    )
}

export default RecipeCard

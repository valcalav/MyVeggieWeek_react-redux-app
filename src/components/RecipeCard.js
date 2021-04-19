import React from 'react'

import './Recipes.css'

function RecipeCard({ recipe, details }) {
    return (
        <section className='recipe-card' key={recipe.id}>
            <img src={recipe.imgURL} className='recipe-list-img' alt='recipe'/>
            <div className='recipe-card-title'>
                <h5>{recipe.name}</h5>
            </div>
            <button className='details-btn' onClick={details}>Details</button>
        </section>
    )
}

export default RecipeCard

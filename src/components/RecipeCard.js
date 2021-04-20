import React from 'react'

import './Recipes.css'

function RecipeCard({ recipe, details }) {
    return (
        <>
        <section className='recipe-card' key={recipe.id}>
            <div className='img-card-container'>
                <img src={recipe.imgURL} className='recipe-list-img' alt='recipe'/>
                <p className='details-btn' onClick={details}>SEE RECIPE</p>
            </div>
            <div className='recipe-card-title'>
                <h5>{recipe.name}</h5>
            </div>
        </section>
        </>
    )
}

export default RecipeCard

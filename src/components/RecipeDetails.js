import React from 'react'

import './Recipes.css'

function RecipeDetails({ recipe, goBack }) {
    return (
        <div>
            <img className='recipe-details-img' src={recipe.imgURL} alt='food plate'/>
            <h2>{recipe.name}</h2>
            <hr/>
            <h5>Ingredients:</h5>
            <ul>
                {
                    recipe.ingredients.map(elm => {
                        return <li>{elm}</li>
                    })
                }
            </ul>
            <h5>Instructions:</h5>
            <ul>
                {
                    recipe.instructions.map(elm => {
                        return <li>{elm}</li>
                    })
                }
            </ul>

            <button onClick={goBack}>Go back</button>
            
        </div>
    )
}

export default RecipeDetails

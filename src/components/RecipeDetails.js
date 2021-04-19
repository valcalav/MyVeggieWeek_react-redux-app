import React from 'react'

import './Recipes.css'

function RecipeDetails({ recipe }) {
    return (
        <div className='recipe-details-container'>
                <h2 className='recipe-details-title'>{recipe.name}</h2>
                <hr/>
            <div className='recipe-details-text'>

                <div>    
                    <h5 className='recipe-details-subtitle'>Ingredients:</h5>
                    <ul>
                        {
                            recipe.ingredients.map(elm => {
                                return <li>{elm}</li>
                            })
                        }
                    </ul>
                </div>

                <img className='recipe-details-img' src={recipe.imgURL} alt='food plate'/>
            </div>

            <h5 className='recipe-details-subtitle'>Instructions:</h5>
            <ul>
                {
                    recipe.instructions.map(elm => {
                        return <li>{elm}</li>
                    })
                }
            </ul>
            
            
        </div>
    )
}

export default RecipeDetails

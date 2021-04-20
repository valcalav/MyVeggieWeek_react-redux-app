import React from 'react'

import AddButton from './AddButton'

import './Recipes.css'

function RecipeDetails({ recipe, add }) {
    return (
        <div className='recipe-details-container'>
        <div className='recipe-details-title'>
            <h2 className='recipe-details-name'>{recipe.name}</h2>
            <div className='add-meal-plan'>
                <AddButton add={add} recipe={recipe}/>
            </div>
        </div>
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

import React from 'react'

import AllRecipes from '../features/allRecipes/AllRecipes'
import SearchRecipe from '../features/searchRecipe/SearchRecipe'

import './RecipesPage.css'

function RecipesPage() {
    return (
        <div>
            <SearchRecipe />
            <section className='recipes-container'>
                <AllRecipes />
            </section>
        </div>
    )
}

export default RecipesPage

import React from 'react'

import AllRecipes from '../features/allRecipes/AllRecipes'
import SearchRecipe from '../features/searchRecipe/SearchRecipe'
import WeekMealPlan from '../features/weekMealPlan/WeekMealPlan'

import './RecipesPage.css'

function RecipesPage() {
    return (
        <div>
            <SearchRecipe />
            <section className='recipes-container'>
                <AllRecipes />
            </section>
            <section>
                <WeekMealPlan />
            </section>
        </div>
    )
}

export default RecipesPage

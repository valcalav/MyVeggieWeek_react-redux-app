import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadData, selectFilteredAllRecipes } from './AllRecipesSlice'
import { addMondayRecipe, addTuesdayRecipe, addWednesdayRecipe, addThursdayRecipe, addFridayRecipe, addSaturdayRecipe, addSundayRecipe } from '../weekMealPlan/WeekMealPlanSlice'

import RecipeCard from '../../components/RecipeCard'
import AddButton from '../../components/AddButton'

function AllRecipes() {
    const recipes = useSelector(selectFilteredAllRecipes)
    const dispatch = useDispatch()
    
    const loadAllRecipes = () => {
        dispatch(loadData());
    }

    const onAddToPlan = (recipe) => {
        dispatch(addMondayRecipe(recipe))
    }

    useEffect(() => {
        loadAllRecipes()
    }, [])

    return (
        <>
            { recipes && recipes.map(recipe => {
                return <>
                    <RecipeCard recipe={recipe} key={recipe.id} add={() => onAddToPlan(recipe)}>
                        
                    </RecipeCard>
                </>
            })}
        </>
    )
}

export default AllRecipes

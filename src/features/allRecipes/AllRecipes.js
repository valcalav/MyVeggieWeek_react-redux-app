import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadData, selectFilteredAllRecipes } from './AllRecipesSlice'
import { addMondayRecipe, addTuesdayRecipe, addWednesdayRecipe, addThursdayRecipe, addFridayRecipe, addSaturdayRecipe, addSundayRecipe } from '../weekMealPlan/WeekMealPlanSlice'

import RecipeCard from '../../components/RecipeCard'
import RecipeDetails from '../../components/RecipeDetails'
import AddButton from '../../components/AddButton'

function AllRecipes() {

    const [showDetails, setShowDetails] = useState(false)
    const [recipeDetails, setRecipeDetails] = useState('')

    const recipes = useSelector(selectFilteredAllRecipes)
    const dispatch = useDispatch()
    
    const loadAllRecipes = () => {
        dispatch(loadData());
    }

    const showRecipeDetails = (recipe) => {
        setShowDetails(true)
        setRecipeDetails(recipe)
    }

    const onAddToPlan = (day, recipe) => {

        if (day === 'monday') {
            dispatch(addMondayRecipe(recipe))
        } else if (day === 'tuesday') {
            dispatch(addTuesdayRecipe(recipe))
        } else if (day === 'wednesday') {
            dispatch(addWednesdayRecipe(recipe))
        } else if (day === 'thursday') {
            dispatch(addThursdayRecipe(recipe))
        } else if (day === 'friday') {
            dispatch(addFridayRecipe(recipe))
        } else if (day === 'saturday') {
            dispatch(addSaturdayRecipe(recipe))
        } else if (day === 'sunday') {
            dispatch(addSundayRecipe(recipe))
        } else {
            alert('Please pick a day of the week to add it to your meal plan')
        }

        console.log('AllRecipes file. Day:', day, 'and recipe:', recipe)
    }

    useEffect(() => {
        loadAllRecipes()
    }, [])

    return (
        <>
            {
                !showDetails
                ? 
                <>
                { recipes && recipes.map(recipe => {
                    return <RecipeCard recipe={recipe} key={recipe.id} details={() => showRecipeDetails(recipe)} />
                })}
                </>
                :
                <div>
                    <RecipeDetails recipe={recipeDetails} goBack={() => setShowDetails(false)} recipe={recipeDetails} />
                    <AddButton add={onAddToPlan} recipe={recipeDetails} />
                </div>
            }
        </>
    )
}

export default AllRecipes

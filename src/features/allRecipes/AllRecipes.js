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

    const onAddToPlan = (recipe) => {
        dispatch(addMondayRecipe(recipe))
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
                    return <>
                        <RecipeCard recipe={recipe} key={recipe.id} details={() => showRecipeDetails(recipe)}>
                        </RecipeCard>
                    </>
                })}
                </>
                :
                <div>
                    <RecipeDetails recipe={recipeDetails} goBack={() => setShowDetails(false)} add={() => onAddToPlan(recipeDetails)} /> 
                {/* <img className='details-img' src={recipeDetails.imgURL} alt='recipe'/>
                <p>{recipeDetails.name}</p>
                <button onClick={() => setShowDetails(false)}>Go back</button> */}
                </div>
            }
        </>
    )
}

export default AllRecipes

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadData, selectFilteredAllRecipes } from './AllRecipesSlice'

import RecipeCard from '../../components/RecipeCard'

function AllRecipes() {
    const recipes = useSelector(selectFilteredAllRecipes)
    const dispatch = useDispatch()
    
    const loadAllRecipes = () => {
        dispatch(loadData());
    }

    useEffect(() => {
        loadAllRecipes()
    }, [])

    return (
        <>
            { recipes && recipes.map(recipe => {
                return <RecipeCard recipe={recipe} key={recipe.id} />
            })}
        </>
    )
}

export default AllRecipes

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadData, selectAllRecipes } from './AllRecipesSlice'

import RecipeCard from '../../components/RecipeCard'

function AllRecipes() {
    const dispatch = useDispatch()
    const allRecipes = useSelector(selectAllRecipes)
    
    const loadAllRecipes = () => {
        dispatch(loadData());
    }

    useEffect(() => {
        loadAllRecipes()
    }, [])

    return (
        <div>
            { allRecipes.map( recipe => {
                return <RecipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    )
}

export default AllRecipes

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
            Recetas aqui
            { allRecipes.map( recipe => {
                console.log(recipe)
                return <RecipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    )
}

export default AllRecipes

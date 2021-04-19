import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadData, selectFilteredAllRecipes } from './AllRecipesSlice'
import { addMondayRecipe, addTuesdayRecipe, addWednesdayRecipe, addThursdayRecipe, addFridayRecipe, addSaturdayRecipe, addSundayRecipe } from '../weekMealPlan/WeekMealPlanSlice'

import RecipeCard from '../../components/RecipeCard'
import RecipeDetails from '../../components/RecipeDetails'
import AddButton from '../../components/AddButton'

import { Row, Col } from 'react-bootstrap'

function AllRecipes() {

    const [showDetails, setShowDetails] = useState(false)
    const [recipeDetails, setRecipeDetails] = useState('')
    const [currentFirstRecipe, setCurrentFirstRecipe] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [numRecipes, setNumRecipes] = useState(8)


    const recipes = useSelector(selectFilteredAllRecipes)
    const dispatch = useDispatch()
    
    const loadAllRecipes = () => {
        dispatch(loadData())
    }
    
    useEffect(() => {
        loadAllRecipes()
    }, [])

    const showRecipeDetails = (recipe) => {
        setShowDetails(true)
        setRecipeDetails(recipe)
    }

    const onChangePage = (e) => {
        let buttonName = e.target.innerText

        if ( buttonName === "Next" ) {
            setCurrentPage(currentPage+1)
            setCurrentFirstRecipe(currentFirstRecipe+numRecipes)
            console.log("currentPage: ", currentPage, "and currentFirstRecipe: ", currentFirstRecipe)
        } else {
            setCurrentPage(currentPage-1)
            setCurrentFirstRecipe(currentFirstRecipe-numRecipes)
        }
    }

    const onAddToPlan = (day, recipe) => {

        let newRecipe = { ...recipe }

        if (day === 'monday') {
            newRecipe.day = 'monday'
            dispatch(addMondayRecipe(newRecipe))
        } else if (day === 'tuesday') {
            newRecipe.day = 'tuesday'
            dispatch(addTuesdayRecipe(newRecipe))
        } else if (day === 'wednesday') {
            newRecipe.day = 'wednesday'
            dispatch(addWednesdayRecipe(newRecipe))
        } else if (day === 'thursday') {
            newRecipe.day = 'thursday'
            dispatch(addThursdayRecipe(newRecipe))
        } else if (day === 'friday') {
            newRecipe.day = 'friday'
            dispatch(addFridayRecipe(newRecipe))
        } else if (day === 'saturday') {
            newRecipe.day = 'saturday'
            dispatch(addSaturdayRecipe(newRecipe))
        } else if (day === 'sunday') {
            newRecipe.day = 'sunday'
            dispatch(addSundayRecipe(newRecipe))
        } else {
            alert('Please pick a day of the week to add it to your meal plan')
        }

        console.log('AllRecipes file. Day:', day, 'and recipe:', recipe)
    }


    return (
        <>
            {
                !showDetails
                ? 
                <Row>

                        { recipes && recipes.slice(currentFirstRecipe, numRecipes*currentPage).map(recipe => {

                            return <RecipeCard recipe={recipe} key={recipe.id} details={() => showRecipeDetails(recipe)} />
                        })}
                    <Col lg={12}>
                    <br/>
                    {
                        currentPage > 1 ? <button onClick={(e) => onChangePage(e)}>Back</button> : <button disabled>Back</button>
                    }
                    {
                        currentFirstRecipe+numRecipes >= recipes.length ? <button disabled>Next</button> : <button onClick={(e) => onChangePage(e)}>Next</button>
                    }
                    </Col>
                </Row>
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

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadData, selectFilteredAllRecipes } from './AllRecipesSlice'
import { selectDetailsView, changeDetailsView } from '../DetailsViewSlice'
import { addMondayRecipe, addTuesdayRecipe, addWednesdayRecipe, addThursdayRecipe, addFridayRecipe, addSaturdayRecipe, addSundayRecipe } from '../weekMealPlan/WeekMealPlanSlice'

import RecipeCard from '../../components/RecipeCard'
import RecipeDetails from '../../components/RecipeDetails'

import Arrow from '../../image/arrow.png'

import '../../pages/RecipesPage.css'

import { Row, Col } from 'react-bootstrap'

function AllRecipes() {

    const [recipeDetails, setRecipeDetails] = useState('')
    const [currentFirstRecipe, setCurrentFirstRecipe] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [numRecipes, setNumRecipes] = useState(10)


    const recipes = useSelector(selectFilteredAllRecipes)
    const showDetails = useSelector(selectDetailsView)
    const dispatch = useDispatch()
    
    const loadAllRecipes = () => {
        dispatch(loadData())
    }
    
    useEffect(() => {
        loadAllRecipes()
    }, [])

    const showRecipeDetails = (recipe) => {
        dispatch(changeDetailsView(true))
        setRecipeDetails(recipe)
    }

    const hideRecipeDetails = () => {
        dispatch(changeDetailsView(false))
    }

    const onChangePage = (e) => {
        let buttonName = e.target.id

        if ( buttonName === "next" ) {
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
                    <div className='all-recipes-container'>

                        { recipes && recipes.slice(currentFirstRecipe, numRecipes*currentPage).map(recipe => {

                            return <RecipeCard recipe={recipe} key={recipe.id} details={() => showRecipeDetails(recipe)}/>

                        })}
                    </div>

                    <Col lg={12}>
                        <div className='pagination-btns'>
                            {
                                currentPage > 1 ? <img onClick={(e) => onChangePage(e)} src={Arrow} className='arrow-back' id='back' /> : <img src={Arrow} className='arrow-back disabled'/>
                            }
                            {
                                currentFirstRecipe+numRecipes >= recipes.length ? <img src={Arrow} className='arrow-next disabled'/> : <img onClick={(e) => onChangePage(e)} src={Arrow} className='arrow-next' id='next' />
                            }
                        </div>                        
                    </Col>
                </Row>
                :
                <div>
                    <RecipeDetails recipe={recipeDetails} recipe={recipeDetails} add={onAddToPlan} />
                    
                    <div className='go-back-btn'>
                        <a onClick={() => hideRecipeDetails()} className='back-btn'>Go back</a>
                    </div>
                </div>
            }
        </>
    )
}

export default AllRecipes

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import AllRecipes from '../features/allRecipes/AllRecipes'
import SearchRecipe from '../features/searchRecipe/SearchRecipe'
import WeekMealPlan from '../features/weekMealPlan/WeekMealPlan'

import { selectDetailsView, changeDetailsView } from '../features/DetailsViewSlice'

import Logo from '../components/logo/Logo'

import './RecipesPage.css'

function RecipesPage() {

    const showDetails = useSelector(selectDetailsView)
    const dispatch = useDispatch()

    const hideRecipeDetails = () => {
        dispatch(changeDetailsView(false))
    }

    return (
        <Container fluid>
            
            <Logo initialPage={() => hideRecipeDetails()}/>
            <Row justify-content-md-center>
                <Col className='recipes-container' lg={8} sm={12}>
                    {
                        !showDetails && 
                        <section className='search-recipe-col'>
                            <SearchRecipe/>
                        </section>
                    }
                    <AllRecipes />
                </Col>
                <Col lg={{span: 3, pull: 1}} sm={12}>
                    <WeekMealPlan />
                </Col>
            </Row>
        </Container>
    )
}

export default RecipesPage

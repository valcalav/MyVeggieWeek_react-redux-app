import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AllRecipes from '../features/allRecipes/AllRecipes'
import SearchRecipe from '../features/searchRecipe/SearchRecipe'
import WeekMealPlan from '../features/weekMealPlan/WeekMealPlan'

import './RecipesPage.css'

function RecipesPage() {
    return (
        <Container fluid>
            <SearchRecipe />
            <Row>
                <Col className='recipes-container' lg={9}>
                    <AllRecipes />
                </Col>
                <Col lg={3}>
                    <WeekMealPlan />
                </Col>
            </Row>
        </Container>
    )
}

export default RecipesPage

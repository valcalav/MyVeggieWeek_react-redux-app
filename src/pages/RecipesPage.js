import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AllRecipes from '../features/allRecipes/AllRecipes'
import SearchRecipe from '../features/searchRecipe/SearchRecipe'
import WeekMealPlan from '../features/weekMealPlan/WeekMealPlan'

import Logo from '../components/logo/Logo'

import './RecipesPage.css'

function RecipesPage() {
    return (
        <Container fluid>
            
            <Logo/>
            <Row>
                <Col className='recipes-container' lg={9}>
                    <Col lg={12} className='search-recipe-col'>
                        <div className="search-recipe-container">
                            <SearchRecipe/>
                        </div>
                    </Col>
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

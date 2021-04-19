import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { PDFDownloadLink } from "@react-pdf/renderer";

import { selectWeekMealPlan } from './WeekMealPlanSlice'
import PdfDocument from '../../components/PdfDocument'

import mealIcon from '../../image/utensils2.png'

import '../../pages/RecipesPage.css'

function WeekMealPlan() {

    const weekPlan = useSelector(selectWeekMealPlan)

    return (
        <div className='meal-plan-container'>
            <h3 className='meal-plan-title'>Meal plan</h3>

            <p>MONDAY:</p>
                {weekPlan.map(recipe => {
                    return recipe.day === 'monday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
                })}
            <hr/>
            <p>TUESDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'tuesday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
            })}
            <hr/>
            <p>WEDNESDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'wednesday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
            })}
            <hr/>
            <p>THURSDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'thursday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
            })}
            <hr/>
            <p>FRIDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'friday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
            })}
            <hr/>
            <p>SATURDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'saturday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
            })}
            <hr/>
            <p>SUNDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'sunday' && <p><img className='meal-plan-icon' src={mealIcon} /> {recipe.name}</p>
            })}

            <PDFDownloadLink document={<PdfDocument data={weekPlan} />} fileName='MyVeggieWeek_MealPlan.pdf'>
            {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
            </PDFDownloadLink>
        </div>

    )
}

export default WeekMealPlan

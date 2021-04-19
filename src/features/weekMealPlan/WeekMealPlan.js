import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { PDFDownloadLink } from "@react-pdf/renderer";

import { selectWeekMealPlan } from './WeekMealPlanSlice'
import PdfDocument from '../../components/PdfDocument'

function WeekMealPlan() {

    const weekPlan = useSelector(selectWeekMealPlan)

    return (
        <div>
            <h3>Meal plan</h3>
            
            <p>MONDAY:</p>
            <ul>
                {weekPlan.map(recipe => {
                    return recipe.day === 'monday' && <p>{recipe.name}</p>
                })}
            </ul>
            <hr/>
            <p>TUESDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'tuesday' && <p>{recipe.name}</p>
            })}
            <hr/>
            <p>WEDNESDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'wednesday' && <p>{recipe.name}</p>
            })}
            <hr/>
            <p>THURSDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'thursday' && <p>{recipe.name}</p>
            })}
            <hr/>
            <p>FRIDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'friday' && <p>{recipe.name}</p>
            })}
            <hr/>
            <p>SATURDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'saturday' && <p>{recipe.name}</p>
            })}
            <hr/>
            <p>SUNDAY:</p>
            {weekPlan.map(recipe => {
                return recipe.day === 'sunday' && <p>{recipe.name}</p>
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

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { PDFDownloadLink } from "@react-pdf/renderer";

import { selectWeekMealPlan } from './WeekMealPlanSlice'
import PdfDocument from '../../components/PdfDocument'

function WeekMealPlan() {

    const week = useSelector(selectWeekMealPlan)

    return (
        <div>
            <h3>Meal plan</h3>
            
            <p>MONDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'monday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}
            <hr/>
            <p>TUESDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'tuesday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}
            <hr/>
            <p>WEDNESDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'wednesday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}
            <hr/>
            <p>THURSDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'thursday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}
            <hr/>
            <p>FRIDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'friday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}
            <hr/>
            <p>SATURDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'saturday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}
            <hr/>
            <p>SUNDAY:</p>
            {week.map(recipe => {
                return recipe.day === 'sunday' && <p>{recipe.name}, day: {recipe.day}</p>
            })}

            <PDFDownloadLink document={<PdfDocument />} fileName='MyVeggieWeek_MealPlan.pdf'>
            Download Meal Plan PDF
            </PDFDownloadLink>
        </div>

    )
}

export default WeekMealPlan

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { selectWeekMealPlan } from './WeekMealPlanSlice'


function WeekMealPlan() {

    const week = useSelector(selectWeekMealPlan)

    return (
        <div>
            <h3>Meal plan</h3>
            {week.map(recipe => <p>{recipe.name}</p>)}
        </div>
    )
}

export default WeekMealPlan

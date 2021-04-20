import { useSelector, useDispatch } from 'react-redux'

import { setSearchRecipe, clearSearchRecipe, selectSearchRecipe } from './SearchRecipeSlice'

import '../../pages/RecipesPage.css'

const SearchRecipe = () => {
    const searchRecipe = useSelector(selectSearchRecipe);
    const dispatch = useDispatch();

    const onSearchRecipeChangeHandler = (e) => {
        dispatch(setSearchRecipe(e));
    }

    const onClearSearchRecipeHandler = () => {
        dispatch(clearSearchRecipe());
    }

    return (
        <input className='search-input' id="search" type='text' value={searchRecipe} onChange={(e) => onSearchRecipeChangeHandler(e.target.value)} placeholder="Search recipes..."/>
    )

}

export default SearchRecipe
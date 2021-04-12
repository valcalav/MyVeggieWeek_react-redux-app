import { useSelector, useDispatch } from 'react-redux'

import { setSearchRecipe, clearSearchRecipe, selectSearchRecipe } from './SearchRecipeSlice'

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
        <input id="search" type='text' value={searchRecipe} onChange={(e) => onSearchRecipeChangeHandler(e.target.value)} placeholder="Search recipes"/>
    )

}

export default SearchRecipe
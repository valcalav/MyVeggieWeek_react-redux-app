import { useSelector, useDispatch } from 'react-redux'

import { setSearchRecipe, clearSearchRecipe, selectSearchRecipe } from './SearchRecipeSlice'

const SearchRecipe = () => {
    const searchRecipe = useSelector(selectSearchRecipe);
    const dispatch = useDispatch();

    const onSearchRecipeChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchRecipe(userInput));
    }

    const onClearSearchRecipeHandler = () => {
        dispatch(clearSearchRecipe());
    }

    return (
        <input type='text' value={searchRecipe} onChange={onSearchRecipeChangeHandler} />
    )

}

export default SearchRecipe
import { GET_RECIPES, SEARCH_RECIPE, NINE_CARDS, FILTERED_RECIPES } from "../actions/types";


const initialState = {
  recipes : [],
  filteredR: [],
  search : "",
  nineCards: []
}

const rootReducer = (state = initialState, {type,payload}) => {
  switch(type){
    case GET_RECIPES:
      return{
        ...state,
        // recipes: [...state.recipes, payload],
        // filteredRecipes: [...state.recipes, payload]
        recipes:  payload,
        filteredR: payload
      }
    case SEARCH_RECIPE:
      return{
        ...state,
        search: payload
      }
    case NINE_CARDS:
      return{
        ...state,
        nineCards: payload
      }
    case FILTERED_RECIPES:
      
       let fitered = state.recipes;
      if(payload !== "all") fitered = state.recipes.filter(recipe => recipe.diets.includes(payload));
      return{
        ...state,
        filteredR: fitered
      }
    default:
      return{...state}
  }
}
export default rootReducer;
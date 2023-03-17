import { GET_RECIPES, SEARCH_RECIPE, NINE_CARDS, FILTERED_RECIPES, SEARCH_RESULTS, GET_APIDATA, GET_DATABASE } from "../actions/types";


const initialState = {
  recipes : [],
  filteredR: [],
  nineCards: [],
  searchFromDB: [],
  apiData: [],
  dataBase: [],
  search: ""
}

const rootReducer = (state = initialState, {type,payload}) => {
  switch(type){
    case GET_RECIPES:
      return{
        ...state,
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
    case SEARCH_RESULTS:
      return{
        ...state,
        filteredR: payload,
      }
    case GET_APIDATA:
      return{
        ...state,
        apiData: payload
      }
    case GET_DATABASE:
      return{
        ...state,
        dataBase: payload
      } 
    default:
      return{...state}
  }
}
export default rootReducer;
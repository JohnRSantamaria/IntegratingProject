import {
  GET_RECIPES,
  SEARCH_RECIPE,
  NINE_CARDS,
  FILTERED_RECIPES,
  SEARCH_RESULTS,
  GET_APIDATA,
  GET_DATABASE,
  ORDER_ALPHA,
  ORDER_HEALTHIER,
  LIST_OF_ERRORS,
  SET_ERROR,
  LOADING,
  DIETS_DATA
} from "../actions/types";

const initialState = {
  recipes: [],
  filteredR: [],
  nineCards: [],
  apiData: [],
  dataBase: [],
  search: "",
  errorFromForm: [],
  listOfAllErros: [],
  dietsData: [],
  showError : false,
  isLoadingState: false 

};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        filteredR: payload,
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        search: payload,
      };
    case NINE_CARDS:
      return {
        ...state,
        nineCards: payload,
      };
    case FILTERED_RECIPES:
      let fitered = state.recipes;
      if (payload !== "all")
        fitered = state.recipes.filter((recipe) =>
          recipe.diets.includes(payload)
        );
      return {
        ...state,
        filteredR: fitered,
      };
    case SEARCH_RESULTS:
      return {
        ...state,
        filteredR: payload,
      };
    case GET_APIDATA:
      return {
        ...state,
        apiData: payload,
      };
    case GET_DATABASE:
      return {
        ...state,
        dataBase:  payload
      };
    case ORDER_ALPHA:
      let orderAlp = [];
      if (payload === "az")
        orderAlp = [...state.filteredR].sort((a, b) =>
          a.title === b.title ? 0 : b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 1
        );
      if (payload === "za")
        orderAlp = [...state.filteredR].sort((a, b) =>
          a.title === b.title ? 0 : b.title.toLowerCase() < a.title.toLowerCase() ? -1 : 1
        );
      return {
        ...state,
        filteredR: orderAlp,
      };

    case ORDER_HEALTHIER:
      let orderHealT = [];
      if (payload === "healthier") {
        orderHealT = [...state.filteredR].sort(
          (a, b) => b.healthScore - a.healthScore
        );
      }

      if (payload === "less healthy") {
        orderHealT = [...state.filteredR].sort(
          (a, b) => a.healthScore - b.healthScore
        );
      }
      return {
        ...state,
        filteredR: orderHealT,
      };
    case LIST_OF_ERRORS:
      return{
        ...state,
        listOfAllErros: payload
      }
    case SET_ERROR:
      return{
        ...state,
        showError: payload
      } 
    case LOADING:
      return{
        ...state,
        isLoadingState: payload	
      } 
    case DIETS_DATA:
      return{
        ...state,
        dietsData: payload
      }
    default:
      return { 
        ...state
      };      
  }
};
export default rootReducer;

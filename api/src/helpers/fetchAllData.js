require('dotenv').config();
const {API_KEY, API_KEY2, API_KEY3, API_KEY4 } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&`;
/*
{
  "status": "failure",
  "code": 401,
  "message": "You are not authorized. Please read https://spoonacular.com/food-api/docs#Authentication"
}
*/
const fetchAllData = async (number = 1) => {

  console.log(`number of request ${number}`);
  let response = await fetch(`${URL}number=${number}&apiKey=${API_KEY}`);
  if(response.status !== 200) response = await fetch(`${URL}number=${number}&apiKey=${API_KEY2}`);
  if(response.status !== 200) response = await fetch(`${URL}number=${number}&apiKey=${API_KEY3}`);
  if(response.status !== 200) response = await fetch(`${URL}number=${number}&apiKey=${API_KEY4}`);
  if(response.status !== 200) throw new Error("Has consumed all 4 API KEYS");
  return response;
}

module.exports = fetchAllData;
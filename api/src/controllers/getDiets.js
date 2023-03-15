const {Diets} = require("../db");
const fetchAllData = require("../helpers/fetchAllData.js");

const getDiets = async () => {
  const hasBeenCreated = await Diets.findAll();

  if(hasBeenCreated.length !== 0) {return hasBeenCreated};
//Place ``37`` because I verified before that these are the Data where we will find the diets.
  const response = await fetchAllData(37);
  if (!response.ok) throw Error(response.status);
  
  const { results } = await response.json();

  const dataFormated = dataFormatedRequested(results);

  await Diets.bulkCreate(dataFormated);

  return dataFormated;

}

const dataFormatedRequested = (results) => {
  const diets = [];
  const temp = {};

  results.forEach((food) => {
    food.diets.forEach((diet) => {
      if (!temp[diet]) {
        const newDiet = {
          name: diet,
        };
        temp[diet] = true;
        diets.push(newDiet);
      }
    });
  });

  return diets;
};

module.exports = getDiets;
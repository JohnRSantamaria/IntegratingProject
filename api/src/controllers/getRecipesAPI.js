const fetchAllData = require("../helpers/fetchAllData");

const getRecipesAPI = async () => {
  const response = await fetchAllData(100);
  if (!response.ok) throw Error(response.status);

  const { results } = await response.json();


  const dataFormated = dataFormatedRequested(results);

  return dataFormated;
};

const dataFormatedRequested = (results) => {
  const requestedData = [];

  results.forEach((food) => {
    const {healthScore,id,title,image,summary,analyzedInstructions,diets} = food;
    const step = [];

    if (analyzedInstructions.length !== 0) {
      const { steps } = analyzedInstructions[0];
      step.push(steps.map(({ number, step }) => ({ number, step })));
    } else {
      step.push([]);
    }

    requestedData.push({
      healthScore,
      id,
      title,
      image,
      summary,
      steps: step[0],
      diets,
    });
  });
  return requestedData;
};

module.exports = getRecipesAPI;

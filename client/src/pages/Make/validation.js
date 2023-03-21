const validation = ({title,summary,diets, healthScore,steps, image})=> {
  var regex = /^[A-Za-z0-9 ]+$/
  const errors = {};
  
  console.log(image);
  

  if(!title) errors.title = "Title cannot be Empty";
  if(title.length > 50 ) errors.title = "The title cannot be longer than 50 characters"
  if(title.length < 3 ) errors.title = "The title must have at least more than 3 characters"
  if(!regex.test(title)) errors.title = "The title cannot contain special characters"
  if(!summary) errors.summary = "Summary cannot be empty";
  if(summary.length < 5 ) errors.summary = "The Summary must have at least more than 5 characters"
  if(!healthScore) errors.healthScore = "The health Score cannot not be Empty"
  if(healthScore< 0 || healthScore > 100 ) errors.healthScore = "The valid range for The score is 0 to 100"
  if(diets.length <= 0) errors.diets = "You must select at least 1 Diet"
  if(image.length === 0) errors.image = "Yuo must add an Image"
  if(steps.length <= 0) errors.steps = "You mush add at least 1 Diet"

  return errors;
}

export default validation;
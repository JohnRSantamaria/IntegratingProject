import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
// import { useSearchID } from "../../hooks/useSearchID";


export const Details = () => {
  const {id} = useParams();
  const [recipes, setRecipes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

useEffect(()=> {
  fetch(`http://localhost:3001/recipes/${id}`)
  .then(response => response.json())
  .then(result=> {
    setIsLoading(false)
    setRecipes(result)
  })

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [id])


  return (
    isLoading ? <p>Loading...</p>:
    
    <div>
      <h4>{recipes.title}</h4>
      <img src={recipes.image} alt={recipes.title}/>
      <h4>{recipes.healthScore}</h4>
      <h3>Summary</h3>
      <div dangerouslySetInnerHTML={{__html :recipes.summary}}/>
      <h3>Diet</h3>
      {recipes.diets?.map(diet=>(<p>{diet}</p>))}
      {recipes.steps?.map(e => (
      <>
      <span>{e.number}</span>
      <samp> </samp>
      <span>{e.step}</span>
      <br />


      
      </>
      ))}
    </div>
  )
}

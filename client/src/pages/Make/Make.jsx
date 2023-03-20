import {connect} from "react-redux";
import { useDiets } from "../../hooks/useDiets";
import { useState, useEffect } from "react";
import styles from "./Make.module.css";
import validation from "./validation.js";

const Make = () => {
  const { isLoading, diets } = useDiets();

  const [ images, setImages ] = useState([]);
  const [ imageURLs, setImageURLs ] = useState(["https://img.freepik.com/vector-premium/icono-vector-imagen-signo-foto-aislado_118339-3177.jpg?w=826"]);
  const [step, setStep] = useState('');
  const [toDos, setToDos] = useState([]);

  const [data, setData] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(()=> {
    if(images.length < 1) return;
    const newImagesUrls = [];
    images.forEach( image => newImagesUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImagesUrls);
  }, [images])

  const onImageChange = (e)=> {
    setImages([...e.target.files]);
    
  }

  const addTodo = (step) => {
    const lastId = toDos.length > 0 ? toDos[toDos.length - 1].number : 0;

    const newTodo = {
      number: lastId + 1,
      step,
    }

    const todoList = [...toDos]
    
    todoList.push(newTodo);
    setToDos(todoList);
  }

  const handleAddTodo = (e) => {
      if (e.key.toLowerCase() === 'enter') {
          addTodo(step);
          setStep('');
      }
  }

  const handleEvents = (e)=> {
    setData({
      ...data,
      [e.target.name]:[{value:e.target.value},{checked:e.target.checked}]
    })

    setErrors(
      validation({
        ...data,
        [e.target.name]:[{value:e.target.value},{checked:e.target.checked}]
      })
    )

  }

  const handleSubmit = (e)=> {
    console.log(toDos)
    console.log(imageURLs[0])
    console.log(errors)
  }


  return (
    <section>
      <div className={styles.backGround}/>
      <fieldset className={styles.container}>
        <legend>Create your own recipe</legend>
        <div className={styles.formContainer}>
          <div className={styles.formLeft}>
            <div className={styles.inputBox}>
              <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Name of your recipe" 
                  
                  onChange={handleEvents}         
                />
            </div>
            <div className={styles.inputBox}>
            <label htmlFor="summary">Summay</label>
            <textarea
              type="fake-textarea"
              autoComplete="on"
              cols="10"
              placeholder="summary of your recipe"
              name="summary"  
              onChange={handleEvents}           
            />
            </div>            
            <div className={styles.inputBox}>
              <label htmlFor="diets">Diets</label>
              <div className={styles.diets}>                
                  {
                    isLoading || diets.map(diet=> (
                      <div className={styles.center}>
                        <label key={diet.id}>
                          <input type="checkbox" onChange={handleEvents} name={diet.name}/> {diet.name}                          
                        </label>
                      </div>                                    
                    ))
                  }                                                             
              </div>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor="rating">Rating</label>
                <input type="number" min={0} max={100} placeholder="How healthy is it?" name="raiting" onChange={handleEvents}/>
            </div>
          </div>

          <div className={styles.formRight}>
            <h4>Image</h4>
            <div className={styles.imageContainer}>              
              <figure className={styles.figureContainer}>
              {imageURLs.map(imageSrc => <img src={imageSrc} alt="Img"/>)}
              <input type="file" accept="image/*" onChange={onImageChange} name="image" id="image"/>
              <label htmlFor="image">
                &nbsp; Choose A photo
              </label>
              </figure>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="steps">Steps</label>
              <input 
                type="text"
                value={step} 
                name="steps"
                onChange={(e)=> setStep(e.target.value)}                
                onKeyDown={(e)=> handleAddTodo(e)}
                placeholder="Add a Step"
              />

              <div className={styles.containerToDoList}>
                
                {toDos.map(todo => (
                  <span key={todo.number} >{<h4>{`${todo.number}: ${todo.step}`}</h4> }</span>
                ))}
                
              </div>

            </div>
          </div>
        </div>
        <button onClick={handleSubmit}>Make a Recepi</button>
      </fieldset>
      
    </section>
  )
}


export default connect()(Make)
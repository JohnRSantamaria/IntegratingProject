import {connect, useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getListOfErrors, setError } from "../../redux/actions/actions";
import validation from "./validation.js";
import styles from "./Make.module.css";
import Error  from "../../components/Error/Error";




const Make = ({dietsData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ images, setImages ] = useState([]);
  const [ imageURLs, setImageURLs ] = useState(['https://img.freepik.com/vector-premium/icono-vector-imagen-signo-foto-aislado_118339-3177.jpg?w=826']);
  const [step, setStep] = useState('');
  const [toDos, setToDos] = useState([]);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    title: "",
    summary: "",
    diets:[],
    healthScore: 0,
    image: []
  });

  useEffect(()=> {
    if(images.length < 1) return;
    const newImagesUrls = [];
    images.forEach( image => {
      newImagesUrls.push(URL.createObjectURL(image));
      setImageURLs(newImagesUrls);
      
    setData({
      ...data,
      image:newImagesUrls
    })

    setErrors(
      validation({
        ...data,
        image:newImagesUrls
    }))
  });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images])

  useEffect(()=> {
    data.steps = toDos;
    setData({
      ...data,
      steps:toDos,
    })

    setErrors(
      validation({
        ...data,
        steps:toDos
      })
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDos])

  const onImageChange = (e)=> {
    setImages([...e.target.files])

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
      [e.target.name]:e.target.value,
    })

    setErrors(
      validation({
        ...data,
        [e.target.name]:e.target.value
      })
    )

  }

  const handleEventsCheck = (e)=> {    
    if(e.target.checked){
      data.diets = [...data.diets, e.target.name]
    }else{
      data.diets = data.diets.filter(d => d !== e.target.name);
    }

    setData({
      ...data,
      diet:data.diets
    })

    setErrors(
      validation({
        ...data,
        diet: data.diets
      })
    )

  }

  const handleSubmit = async ()=> {
    const error = Object.values(errors);
    
    if(error.length === 0){
      try {
        const response = await fetch("http://localhost:3001/recipes", {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
        })

        if(response.status !== 200) throw new Error("There was an error creating the recipe.");

        window.alert("The recipe was created successfully");
        navigate("/food");
          
      } catch (error) {
        window.alert("There was an error creating the recipe");
      }
    }else{
      dispatch(getListOfErrors(error));
      dispatch(setError(true));
    }
  }
  return (
   <>
    <section className={styles.section}>         
      <div className={styles.backGround}/>
      
      <fieldset className={styles.container}>

        <legend>Create your own recipe</legend>
        <div className={styles.formContainer}>
       
          <div className={styles.formLeft}>
                {/* title Container */}
            <div className={styles.inputBox} >
              <label 
                htmlFor="title" 
                >Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Name of your recipe"                 
                  style={{borderColor: errors.title && "red"}}
                  onChange={handleEvents}                           
                />
            </div>
                {/* Summary Container */}
            <div className={styles.inputBox}>
            <label htmlFor="summary">Summay *</label>
            <textarea
              type="fake-textarea"
              autoComplete="on"
              cols="10"
              placeholder="summary of your recipe"
              name="summary"  
              onChange={handleEvents}    
              style={{borderColor: errors.summary && "red"}}       
            />
            </div>           
                {/* Diets Container */}
            <div className={styles.inputBox}>
              <label htmlFor="diets">Diets *</label>
              <div className={styles.diets}>                
                  {
                    dietsData.map(diet=> (
                      <div className={styles.center} key={diet.id}>
                        <label key={diet.id}>
                          <input 
                            type="checkbox" 
                            onChange={handleEventsCheck} 
                            name={diet.name}                            
                          /> {diet.name}                          
                        </label>
                      </div>                                    
                    ))
                  }                                                             
              </div>
            </div>
                {/* Health Score Container */}
            <div className={styles.inputBox}>
                <label htmlFor="healthScore">Health Score *</label>
                <input 
                  type="number" 
                  min={0} 
                  max={100} 
                  placeholder="How healthy is it?" 
                  name="healthScore" 
                  onChange={handleEvents}
                  style={{borderColor: errors.healthScore && "red"}}
                />
            </div>

          </div>

          <div className={styles.formRight}>
                  {/* Image Container */}
            <div className={styles.imageContainer}>
              <figure className={styles.figureContainer}>
              {imageURLs.map((imageSrc,i)=> <img src={imageSrc} alt="Img" key = {i}/>)}

              <input 
                type="file"
                accept="image/*" 
                onChange={onImageChange} 
                name="image" 
                id="image"
                />
              <label htmlFor="image">
                &nbsp; Choose A photo
              </label>
              </figure>
            </div>
                  {/* Steps Container */}
            <div className={styles.inputBox}>
              <label htmlFor="steps">Steps *</label>
              <input 
                type="text"
                value={step} 
                name="steps"
                onChange={(e)=>setStep(e.target.value)}                
                onKeyDown={(e)=> handleAddTodo(e)}
                placeholder="Add a Step"
                style={{borderColor: errors.steps && "red"}}  
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
      <Error/>
   </> 
  )
}
const mapStateToProps = (state)=> {
  return{
    errorFromForm: state.errorFromForm,
    dietsData: state.dietsData
  }
}

export default connect(mapStateToProps)(Make)
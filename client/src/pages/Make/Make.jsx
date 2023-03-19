import styles from "./Make.module.css";

export const Make = () => {
  

  const handleInputChange = ({ target }) => {


    //debe transforamar el string a value para el range
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    //Aqui envio si todo esta bien 
  }

  return (
    <section>
      <div className={styles.container} />
      <fieldset className={styles.form}>
        <legend>Create your own recipe</legend>

          <div className={styles.inputBox}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Name of your recipe"
              //  value={}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="diets">Diets</label>
            <div className={styles.diets}>
              <div className={styles.center}>
                <label><input type="checkbox" onChange={handleInputChange} name="gluten free" /> gluten free</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> dairy free</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> fodmap friendly</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> ketogenic</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> pescatarian</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> whole 30</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> primal</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> paleolithic</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> vegan</label>
              </div>
              <div className={styles.center}>
                <label><input type="checkbox" /> lacto ovo vegetarian</label>
              </div>
            </div>
          </div>

          <div className={styles.inputBox}>
            <input type="submit" value="Create a recipe" className={styles.id} onSubmit={handleSubmit} />
          </div>
          
      </fieldset>
      <fieldset className={styles.form2}>
      <legend>.</legend>
      
      </fieldset>
    </section>
  )
}

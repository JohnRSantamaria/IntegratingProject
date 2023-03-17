### ROUTES 
- __Get/__ https://api.spoonacular.com/recipes/complexSearch?apiKey=f20eb17f27e84ecb8ba11e201c0bc257 (_Busca las imagenes tiene id,title,img, imageType_)
- __Get/__ https://api.spoonacular.com/recipes/complexSearch?apiKey=f20eb17f27e84ecb8ba11e201c0bc257&addRecipeInformation=true
- __Get/__ Search By 'ID': "https://api.spoonacular.com/recipes/{id}/information?apiKey=f20eb17f27e84ecb8ba11e201c0bc257"
- __Para todas las 100:__ https://api.spoonacular.com/recipes/complexSearch?number=1&apiKey=f20eb17f27e84ecb8ba11e201c0bc257&addRecipeInformation=true
- 
- 
- 

### API keys
- **API** : f20eb17f27e84ecb8ba11e201c0bc257
- **APIKEY2** : dbf0e2ad0c8e4370b8c0972990b15365
- **APIKEY3** : 6b66574e6bea4338b11953a7e4550b99

###  Requested data

**📍 MODELO 1 | Recipe**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Resumen del plato. \*
-  Nivel de comida saludable (health score). \*
-  Paso a paso. \*

<br />

**📍 MODELO 2 | Diets**

-  ID. \*
-  Nombre. \*

<br />

**📍 FRONT END  | ___HOME PAGE___** 
   -  Imagen.
   -  Nombre.
   -  Tipos de dietas.

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de una receta:

-  ID.
-  Nombre.
-  Resumen del plato.
-  Nivel de comida saludable (health score).
-  Paso a paso.
-  Imagen.
-  Tipos de dieta.

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una nueva receta.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Resumen del plato.
-  Nivel de comida saludable (health score).
-  Paso a paso.
-  Imagen.
-  Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
-  Botón para crear la receta.

<br>

### **RUTAS DEL BACK**

- __Get/__ http://localhost:3001/diets: "_regresa todos los tipos de dietas_"
- __Get/__ http://localhost:3001/recipes "_reresa todas la comidas de la api y la DB_"
- __Get/__ http://localhost:3001/recipes/:id "_regresa el elemento que coincida con el id_" [__Id necesita ser un String__]
- __Get/__ http://localhost:3001/recipes?name=... "_regresa el elemento que coincida con el name_"
- __Post/__ http://localhost:3001/recipes "_Almacenara la informacion enviada en el back_"
- 
- __Get/__ http://localhost:3001/api "_Traer toda la informacion de la API_"
- __Get/__ http://localhost:3001/db "_Traer toda la infroamcin de la DB_"
- 
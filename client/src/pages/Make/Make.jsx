import React, { useEffect, useState } from 'react'

export const Make = () => {
  
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(()=> {
    if(images.length < 1) return;
    const newImageUrls = [];
    
    images.forEach( image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);

  }, [images])

  const onImageChange = (e)=> {
    setImages([...e.target.files]);
  }




console.log(imageURLs);

  return (
    <div>
      <form action="">
        <label htmlFor="image"></label>
        <div>
        { imageURLs.map(imageSrc => <img src={imageSrc} alt="Ima" style={{width:300, height:300}}/> )}
        </div>
        <input type="file" multiple accept='image/*' onChange={onImageChange}/>
      </form>
    </div>
  )
}

import { useEffect, useState } from 'react'

export const Image = () => {
  const [ images, setImages ] = useState([]);
  const [ imageURLs, setImageURLs ] = useState([]);

  useEffect(()=> {
    if(images.length < 1) return;
    const newImagesUrls = [];
    images.forEach( image => newImagesUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImagesUrls);
  }, [images])

  const onImageChange = (e)=> {
    setImages([...e.target.files]);
  }

  console.log(imageURLs[0])

  return (
   <span>
      <label htmlFor="image"></label>
      <div>
        {imageURLs.map(imageSrc => <img src={imageSrc} alt="Img" style={{width: 400, height:400}}/>)}
      </div>
      
      <input type="file" accept='image/*' onChange={onImageChange} />
   </span>
  )
}

import React, { useRef, useEffect, useState } from 'react';

const ImageCard = (props) => {
  const [ imageSpan, setImageSpan ] = useState(0);
  const { description, urls } = props.image;

  const imageRef = useRef(null);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    setImageSpan(spans);
  };

  useEffect(()=>{
    imageRef.current.addEventListener('load', setSpans);
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${imageSpan}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
      <button onClick={()=>{console.log(imageSpan)}}>show State</button>
    </div>
  )
}

export default ImageCard;

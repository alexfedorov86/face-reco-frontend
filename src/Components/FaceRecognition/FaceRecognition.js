import React from 'react';
import './FaceRecognition.css' 

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img 
          id='inputimage'
          alt='' 
          src={imageUrl}
          width='500px'
          height='auto'
        />
        <div 
          className='bounding-box' 
          style={{
            top: box.topRow, 
            right: box.rightCol, 
            bottom: box.bottomRow, 
            left: box.leftCol,
          }}
        >
        </div>
      </div>
    </div>
  );

}

export default FaceRecognition;

// https://www.publicdomainpictures.net/pictures/320000/nahled/woman-with-braces-1576067018e8B.jpg
// https://upload.wikimedia.org/wikipedia/commons/0/00/Family_transport_in_Tehran.jpg

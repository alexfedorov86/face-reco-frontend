import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {`Please provide picture's URL to detect faces`}
      </p>
      <div className='form center pa4 br3 shadow-1'>
        <input 
          className='f4 pa1 w-70 center'
          type='text'
          onChange={onInputChange}
        />
        <button 
          className='f4 w-30 grow link ph3 pv1 dib white bg-purple'
          onClick={onButtonSubmit}
        >Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;

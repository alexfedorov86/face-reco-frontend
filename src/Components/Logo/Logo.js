import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css' 
import face from './logo_face.png'

const Logo = () => {
  return (
    <div className='ma4 mt0' style={{ width: '140px'}}>
      <Tilt>
        <div className='Tilt br4 shadow-2 pa3' style={{ height: '140px'}}>
          <img style={{paddingTop: '5px'}} alt='logo' src={face}/>          
          {/* <a target="_blank" href="https://icons8.com/icon/wRzen4S3xloP/face-scanning">face scanning</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
          {/* <h1>LOGO 👀</h1> */}
        </div>
      </Tilt>
    </div>
  );

}

export default Logo;


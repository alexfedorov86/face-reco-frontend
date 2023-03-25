import React, { Component } from 'react';
// import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import './App.css';
import ParticlesBox from './Components/ParticlesBox/ParticlesBox';

// If server do not start try command:
//export NODE_OPTIONS=--openssl-legacy-provider


const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    dateJoined: ''
  }
}

class App extends Component {
  constructor() {
    super ();
    this.state = initialState;
  }


  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        dateJoined: data.dateJoined      
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width,height);
    // console.log(clarifaiFace);
    return { 
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    // console.log(box);
    this.setState({box: box});
    // ES6 allows to simplify:
    // ({box: box}) --> ({box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // console.log('State', this.state.input);
      fetch('http://localhost:3000/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
      .then(res => res.json())
      .then(response => {
        console.log('BE Response', response);
        if (response) {
          // console.log('ID', this.state.user.id);
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(res => res.json())
          .then(count => {
            // console.log('count', count)
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
          .catch(err => console.log(err)) 
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  render() {
    const { isSignedIn, imageUrl, box, route, user } = this.state;
    return (
      <div className="App">
        <ParticlesBox  className="prtcls"/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? <div>
              <Logo />
              <Rank userName={user.name} userEntries={user.entries}/>
              <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition imageUrl={imageUrl} box={box}/>
            </div>
          : (
              route === 'signin'
              ? <SignIn 
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}/>
              : <Register 
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;



// import ParticlesBg from 'particles-bg'
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

        {/* <ParticlesBg 
          type="circle" 
          bg={true} /> */}
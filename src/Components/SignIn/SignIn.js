import React from 'react';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://face-reco-backend-86.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
        console.log('user to load', user);
      } else {
        alert(user);
      }
    })
  }

  render() {
    const { onRouteChange } = this.props;
    return (    
      <main className="pa1 br3 shadow-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">    
  
        <div className="measure">
  
          <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            
            <div className="">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                onChange={this.onEmailChange}
                />
            </div>
  
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                onChange={this.onPasswordChange}  
                />
            </div>
  
          </fieldset>
  
          <div className="">
            <input 
              onClick={this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Sign In" />
          </div>
          
          <div className="lh-copy mt3">
            <p 
              onClick={() => onRouteChange('register')} 
              className="f5 link dim black db pointer"
              >Register
            </p>
          </div>
  
        </div>
      </main>
    );
  }


}

export default SignIn;
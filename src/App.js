import React, {Component} from 'react';
// import {Route, Link} from 'react-router-dom';
// import LandingPage from './Components/LandingPage/LandingPage';
// import LoginForm from './Components/LoginForm/LoginForm';
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
// import PlantRoseForm from './Components/PlantRoseForm/PlantRoseForm';
import ViewGarden from './Components/ViewGarden/ViewGarden';

class App extends Component {
  render() {

    return (
      <main className='App'>
          <ViewGarden/>
        
      </main>
    );

  }

}

export default App;

import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import PlantRoseForm from './Components/PlantRoseForm/PlantRoseForm';
import ViewGarden from './Components/ViewGarden/ViewGarden';
import LandingNav from './Components/LandingNav/LandingNav';
import EditRose from './Components/EditRose/EditRose';
import Rose from './Components/Rose/Rose';

class App extends Component {
  render() {
    return (
      <main className='App'>
        
        <nav className="StaticNav">
          <LandingNav/>
        </nav>

        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/register' component={RegistrationForm}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/your-garden' component={ViewGarden}/>
          <Route path='/plant-rose' component={PlantRoseForm}/>
          <Route path='/edit-rose' component={EditRose}/>
          <Route path='/view-rose' component={Rose}/>
        </Switch>
        
      </main>
    );
  }
}

export default App;

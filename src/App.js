import React, {Component} from 'react';
import config from './config';
import moodGardenContext from './moodGardenContext';
import {Route, Switch} from 'react-router-dom';
import TokenService from './services/token-services';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import PlantRoseForm from './Components/PlantRoseForm/PlantRoseForm';
import ViewGarden from './Components/ViewGarden/ViewGarden';
import EditRose from './Components/EditRose/EditRose';
import RoseMain from './Components/RoseMain/RoseMain';
import ErrorHandler from './ErrorHandlers/ErrorHandler';
import './App.css';

class App extends Component {
  state = {
    roses: []
  };

  componentDidMount() {
    // check for login credentials on app startup via polyfill. //
    if (!TokenService.getAuthToken()) { 
      return; 
    }
    
    // if logged in and credentials valid, fetch all entries by user logged in. //
    fetch(`${config.API_ENDPOINT}/roses`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(roses => {
        this.setState({roses});
      })
      .catch(error => {
        console.error({error});
      })
  }

  // handle POST of new journal entries in the state. //
  handleAddRose = (newRose) => {
    this.setState({
      roses: [
        ...this.state.roses,
        newRose
      ]
    });
  }

  // handle DELETE of existing journal entries in the state. //
  handleDeleteRose = id => {
    this.setState({
      roses: this.state.roses.filter(rose => rose.id !== id)
    });
  }

  // handle PATCH of existing journal entries in the state. //
  handleUpdateRose = updatedRose => {
    const updatedRoses = this.state.roses.map(rose => { 
      return rose.id === updatedRose.id ? updatedRose : rose
    });

    this.setState({
      roses: updatedRoses
    });
  }
  
  render() {
    const roseValues = {
      roses: this.state.roses,
      addRose: this.handleAddRose,
      deleteRose: this.handleDeleteRose,
      updateRose: this.handleUpdateRose
    };
    
    return (
      <ErrorHandler>

        <moodGardenContext.Provider value={roseValues}>
          
          <main className='App'>

              <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/register' component={RegistrationForm}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/your-garden' component={ViewGarden}/>
                <Route path='/plant-rose' component={PlantRoseForm}/>
                <Route path='/edit-rose/:id' component={EditRose}/>
                <Route path='/roses/:id' component={RoseMain}/>
              </Switch>

          </main>

        </moodGardenContext.Provider>
      
      </ErrorHandler>
    );
  }
}

export default App;

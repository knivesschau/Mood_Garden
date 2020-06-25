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

class App extends Component {
  state = {
    roses: []
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/roses`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(roses => {
        console.log(roses)
        this.setState({roses})
      })
      .catch(error => {
        console.error({error})
      })
  }

  handleAddRose = (newRose) => {
    this.setState({
      roses: [
        ...this.state.roses,
        newRose
      ]
    })
  }

  handleDeleteRose = id => {
    this.setState({
      roses: this.state.roses.filter(rose => rose.id !== id)
    })
  }

  handleUpdateRose = updatedRose => {
    const updatedRoses = this.state.roses.map(rose => { 
      return rose.id === updatedRose.id ? updatedRose : rose
    })

    this.setState({
      roses: updatedRoses
    });
  };
  
  render() {
    const roseValues = {
      roses: this.state.roses,
      addRose: this.handleAddRose,
      deleteRose: this.handleDeleteRose,
      updateRose: this.handleUpdateRose
    }
    
    return (
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
    );
  }
}

export default App;

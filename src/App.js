import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/assets/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized){
      return <Preloader />
    }else {
      return (
        <BrowserRouter >
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Switch>
                <Route path='/dialogs' render={ () => <DialogsContainer />} />
                <Route path='/profile/:userID?' render={ () => <ProfileContainer  />} />
                <Route path='/users' render={ () => <UsersContainer  />} />
                <Route path='/login' render={ () => <LoginPage  />} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    
      );
    }
  
  }
  
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

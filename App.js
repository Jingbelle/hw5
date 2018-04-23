import React, { Component } from 'react';

import './App.css';
import MovieHeader from './component/movieheader';
import MovieList from './component/movielist';
import Movie from './component/movie';
import Authentication from './component/authentication';
import {HashRouter,Route} from 'react-router-dom';

import { Provider } from 'react-redux'

import store from './stores/store'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <HashRouter>
        <div>
            <MovieHeader/>
            <Route exact path="/" render={()=><MovieList />}/>

            <Route path="/movielist" render={()=><MovieList />}/>

            <Route path="/movie/:movieId" render={()=><Movie />}/>

            <Route path="/signin" render={()=><Authentication />}/>
        </div>
            </HashRouter>
          </Provider>
      </div>
    );
  }
}

export default App;


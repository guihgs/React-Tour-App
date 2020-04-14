import React, { Component } from 'react';
import { 
  Route,
  BrowserRouter 
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={TourList} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
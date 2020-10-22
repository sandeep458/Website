import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Header/Navbar';
import Search from './components/Body/Search/Search';
import PhotoGallery from './components/Gallery/PhotoGallery';
 class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <PhotoGallery />
       
      </div>
    )
  }
}

export default App;

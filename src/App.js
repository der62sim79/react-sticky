import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Bild from './components/img/Bild';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <Bild/>
        
        <Bild/>
      </div>
     );
  }
}
 
export default App;
import React from 'react';
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage.component";

import './App.css';


class App extends React.Component {
 

  render(){
    

    return (
      <div >
        <Header></Header>
        <Homepage></Homepage>
      </div>
    );
  }
}


export default App;

import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "snackbar/dist/snackbar";

import Header from './Pages/Header';
import Slider from './Pages/Slider';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Slider/>
    </React.Fragment>
  );
}

export default App;

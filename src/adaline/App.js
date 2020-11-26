import React, { useState } from 'react';
import '../bp/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../bp//components/Header';
import Footer from '../bp/components/Footer';
import AdalinePage from './page/AdalinePage';
import {PerceptronContext} from './components/PerceptronContext';


function App() { 
  const [perceptronState, setPerceptronState] = useState({
    perceptron : null,
    entrenado: false,
    x : [],
    y : [],    
    cpDrawer: null,
    limiteAlcanzado: false
  });

 
  return (
    <div className="App">
      <PerceptronContext.Provider value = {{
          perceptronState, 
          setPerceptronState
      }}>
        <Header />

        <AdalinePage />

        <Footer />
      </PerceptronContext.Provider>
      
      
    </div>
  );
}

export default App;

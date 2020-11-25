import React, { useState } from 'react';
import '../bp/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../bp/components/Header';
import Footer from '../bp/components/Footer';
import Page_bp from './page/page_bp';
import {PerceptronContext} from '../bp2/components/PerceptronContext';


function App() { 
  const [perceptronState, setPerceptronState] = useState({
    perceptron : null,
    entrenado: false,
    x : [],
    y : [],    
    cpDrawer: null,
    limiteAlcanzado: false, 
    claseSelect: "1",
    iniciado: false,
    meanError: [],
    clases: [{
      label: "clase1",
      color: "#0101DF",
      value: 1
    },
    {
      label: "clase2", 
      color: "#DF0101",
      value: 2
  }
  
  ]

  });
 
  return (
    <div className="App">
      <PerceptronContext.Provider value = {{
          perceptronState, 
          setPerceptronState
      }}>
        <Header />

        <Page_bp />

        <Footer />
      </PerceptronContext.Provider>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter';
import SecCounter from './Components/SecCounter';
import CounterFunc from './Components/CounterFunc';

import Button from 'react-bootstrap/Button';
import React, { useState } from "react";




function App() {

  const [show, setShow] = useState(false);


  return (
    <div className="App">
        <div className="d-grid gap-2" style={{margin :'20px'}}>
      <Button variant="primary" size="lg" active onClick={() => setShow(!show)}>
      {show ? " Stop Counter" : "Start Counter"}
      </Button>
      </div>
    
      {show && <SecCounter/>}

      
    </div>
  );
}

export default App;

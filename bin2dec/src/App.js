import React, { useState } from 'react';

import './App.css';

function App() {
  const [binary, setBinary] = useState(1)
  const [binaryText, setBinaryText] = useState('')
  const [decimalText, setDecimalText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function convertBinToDec(e) {
    e.preventDefault();
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage('coloque 0 ou 1');
      return
    }
    setErrorMessage('')
    setDecimalText(parseInt(binaryText, 2));
   
  };
  async function convertDecToBin(e) {
    e.preventDefault();
    if (decimalText.match(/^[0-9]+$/g) === null) {
      setErrorMessage('coloque um inteiro positivo');
      return
    }
    setErrorMessage('')
    setBinaryText(parseInt(decimalText, 10).toString(2))
  
  }
  async function changeBinary() {
    setBinaryText('');
    setDecimalText('');
   
    setErrorMessage('')
    if (binary === 1) {
      setBinary(0);
      
    } else {
      setBinary(1);
      
    }
  }


  return (
    <div className="App">
      <h1>Conversão Binaria/decimal</h1>
      <div className="card">

        <span>
          <form onSubmit={convertBinToDec} style={{ display: binary === 1 ? 'block ' : 'none' }} >
            <h2> Binario para Decimal</h2>

            <div className="input-group">
              <label>Binario </label>
              <input type="text" placeholder="digite 0 ou 1"
                value={binaryText}
                onChange={e => setBinaryText(e.target.value)}
              />
            </div>
            <div className="input-group" >
              <label>Decimal </label>
              <input type="text" defaultValue={decimalText} />
            </div>
            <button className="button" type="submit"> Converter</button>

          </form>

          <form onSubmit={convertDecToBin} style={{ display: binary === 0 ? 'block ' : 'none' }} >
            <h2>  Decimal Para Binario</h2>

            <div className="input-group">
              <label>Decimal </label>
              <input type="text" placeholder="digite apenas numeros" value={decimalText} onChange={e => setDecimalText(e.target.value)} />
            </div>
            <div className="input-group" >
              <label>Binario </label>
              <input type="text" defaultValue={binaryText} />
            </div>
            <button className="button" type="submit"> Converter</button>

          </form>
          <div className="left">
            <label className="switch"> 
              <input type="checkbox" onClick={changeBinary} />
              <span className="slider round"></span>
            </label>
            <p style={{ display: binary === 1 ? 'block ' : 'none' }} > Binario para decimal</p>
            <p style={{ display: binary === 0 ? 'block ' : 'none' }} > Decimal para binario</p>

          </div>
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
        </span>
      </div>
    </div>
  );

}

export default App;

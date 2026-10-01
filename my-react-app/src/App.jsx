import React from 'react'
import weblogo from './assets/weblogo.png'
import absrtacion from './assets/abstraction.png'
import './App.css';

const App = () => {
  return (
    <div className= 'page'>
      <div className='left'>
       <img src={weblogo} alt="logo" width='135px' height='117px'/>
        <h3>Getting started with Vr Creation</h3>   
        <img src={absrtacion} alt="Weblogo" width='630.46px' height="673.97px" />
      </div>        

        <div className='right'>
      </div>
    </div>

  )
}

export default App
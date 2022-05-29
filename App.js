import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Component/Pro'

function App() {
  return (
    <div className="App">
      <Card name="poonam" email="poonam20@navgurukul.org"
       other={{address:"rajsthan",mob:234567898}}
      />
      {/* <Card name={"pooja"}email="pooja20@navgurukul.org"
      other={{address:"UP",mob:234567898}}/>
      <Card name={"tina"}email="tina20@navgurukul.org"
      other={{address:"Bangluru",mob:234567898}}/>
      <Card name={"aaru"}email="aaru20@navgurukul.org"
      other={{address:"Punjab",mob:234567898}}/> */}
    </div>
  );
}

export default App;

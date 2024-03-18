import * as React from 'react';
import Navbar from './Navbar/navbar';
import CardListSec from './CardList/cardListSec';

function App() {
  if(localStorage.getItem("username") == null){
    localStorage.setItem("username", "deep");
    localStorage.setItem("password", "deep");
  }
  return (
    <div>
      <Navbar />
      <CardListSec />
    </div>
  );
}

export default App;

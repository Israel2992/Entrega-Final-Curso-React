import { Fragment } from 'react';
import './App.css';
import NavBar from './Componenets/NavBar/NavBar';
import Header from './Componenets/Header/header';
import Main from './Componenets/Main/Main';



function App() {
  return ( 
    <Fragment>
      <Header title ={"E-commerce"}/>
      <NavBar/>
      <Main/>
    </Fragment>
  );
}

export default App;

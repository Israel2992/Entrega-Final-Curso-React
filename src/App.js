import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import IndexView from './Views/IndexView';
import Header from './Componenets/Header/header';
import NavBar from './Componenets/NavBar/NavBar';
import DetailProductView from './Views/DetailProductView';
import CategoryView from './Views/CategoryView';
import { routes } from './routes';
import { useState } from 'react';


function App() {

  const [valor,setValor] = useState(0);

  return ( 
    <BrowserRouter>
      <Header title={"E-commerce"} totalCarrito={valor}/>
      <NavBar />
      <Routes>
        <Route path={routes.root} element={<IndexView setValor={setValor}/>}></Route>
        <Route path={routes.detailProductView} element={<DetailProductView/>}/>
        <Route path={routes.categoryView} element={<CategoryView setValor={setValor}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

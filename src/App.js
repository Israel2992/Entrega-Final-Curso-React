// Css
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
// Vistas
import IndexView from './Views/IndexView';
import Header from './Componenets/Header/header';
import NavBar from './Componenets/NavBar/NavBar';
import DetailProductView from './Views/DetailProductView';
import CategoryView from './Views/CategoryView';
import LoginView from './Views/LoginView';
import DetailCarView from './Views/DetailCarView';
// ruteo
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
// hooks
import { useState } from 'react';
// utile
import GeneralContext from './Context/GeneralContext';




function App() {

  const [carProducts, setCarProducts] = useState([])

  const addToCar = (item) =>{
    setCarProducts([...carProducts,item])
  };

  const removeToCar = (item) => {
    const nuevoArray = carProducts.filter(elemt => elemt.id !== item.id)
    setCarProducts(nuevoArray) 
  };

  return (
    <GeneralContext.Provider value= {{carProducts,setCarProducts,addToCar,removeToCar}}>
      <BrowserRouter>
        <Header title={"E-commerce"}/>
        <NavBar />
        <Routes>
          <Route path={routes.root} element={<IndexView />}></Route>
          <Route path={routes.detailProductView} element={<DetailProductView />} />
          <Route path={routes.categoryView} element={<CategoryView  />}></Route>
          <Route path={routes.carView} element={<DetailCarView />}></Route>
          <Route path={routes.loginView} element={<LoginView />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;

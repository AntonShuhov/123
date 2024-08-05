import React, {createContext, useEffect, useContext} from 'react';
import{ Routes, Route } from 'react-router-dom';
import { observer } from "mobx-react-lite";

import Store from "./store/user-store";

import Main from "./components/Main/Main";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Solds from "./components/Solds/Solds";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AdminPanel from "./components/Admin/AdminPanel";
import Products from "./components/Products/Proudcts";
import Product from "./components/Product/Product";

const store = new Store();

export const Context = createContext( {
    store,
})

function App() {
    const {store} = useContext(Context);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            console.log(localStorage.getItem('user'))
        }
    }, [])

  return (
      <>
          <Context.Provider value={{store }}>
              <div className="App">   </div>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/solds' element={<Solds/>}/>
                <Route path='/adminPanel' element={<AdminPanel/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path=':id' element={<Product/>}/>

                  <Route path='*' element={<NotFoundPage/>}/>
              </Routes>
          </Context.Provider>
      </>
  );
}

export default observer(App);

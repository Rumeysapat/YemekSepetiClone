import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

import Card from '../pages/card';
import Restaurant from '../pages/restaurant';
import Header from '../components/header';
import Footer from '../components/footer';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../redux/actions/rest-actions';
import { getBasket } from '../redux/actions/basket-actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getBasket());
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

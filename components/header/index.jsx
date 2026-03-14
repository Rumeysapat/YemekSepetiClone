import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, UtensilsCrossed } from 'lucide-react';
import { useSelector } from 'react-redux';

const Index = () => {
  const { restaurants } = useSelector((store) => store.restaurants);
  const { basket } = useSelector((store) => store.basket);

  // dizideki ürünlerin amount değerlerini topladık
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);
  return (
    <header className="sticky top-0 pt-4 pb-3 z-20 backdrop-blur">
      <div className="container">
        <div className="box flex flex-wrap items-center justify-between gap-5 px-5 py-4 ">
          <Link
            className="font-sr text-red-500 font-bold text-2xl lg:text-3xl tracking-tight drop-shadow-sm"
            to="/"
          >
            Thunk Sepeti
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <button className="pill">
              Yakınınızda {restaurants.length} <UtensilsCrossed />
              <span className="max-md:hidden tracking-normal">restoran</span>
            </button>

            <Link
              className=" flex items-center rounded-full bg-red-500/90 px-4 py-2 text-white shadow-lg shadow-red-200 transition hover:bg-red-600"
              to="/card"
            >
              <ShoppingBasket className="size-4" />
              <span className="font-semibold">{totalAmount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;

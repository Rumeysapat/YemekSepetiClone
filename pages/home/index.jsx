import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Card from './card';

const Index = () => {
  const { isloading, error, restaurants } = useSelector(
    (store) => store.restaurants,
  );

  return (
    <div className="container space-y-2">
      <div className="max-w-2xl">
        <h1 className="font-semibold text-3xl md:text-4xl">
          Yakınınızdaki Restoranlar
        </h1>
        <p className="muted">Favori lezzetlerinize dakikalar içinde ulaşın</p>
      </div>
      <div>
        {isloading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {restaurants.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

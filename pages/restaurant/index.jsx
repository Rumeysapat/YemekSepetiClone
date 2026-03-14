import React from 'react';
import RestaurantDetail from './restaurant-detail';
import RestaurantProducts from './restaurant-products';

const index = () => {
  return (
    <div className="container space-y-6">
      <div className="box p-6">
        <RestaurantDetail />
      </div>
      <div className="box p-6">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default index;
